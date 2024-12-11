const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const data = require('./database'); // Replace with your actual data file
const hbs = require('handlebars');
const path = require('path');
const moment = require('moment');

// Compile Handlebars template
const compile = async function (templateName, data) {
    const filePath = path.join(process.cwd(), `${templateName}.hbs`);
    const html = await fs.readFile(filePath, 'utf-8');
    return hbs.compile(html)(data);
};

// Register Handlebars helper
hbs.registerHelper('dateFormat', function (value, format) {
    return moment(value).format(format);
});

(async function () {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Compile Handlebars template with data
        const content = await compile('shot-list', data);

        // Set content in Puppeteer
        await page.setContent(content);

        // Adjust viewport and media type
        await page.setViewport({ width: 595, height: 842 });
        await page.emulateMediaType('screen');

        // Generate the PDF
        await page.pdf({
            path: './output.pdf',
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true, // Ensures CSS @page is respected
        });

        console.log('PDF generated successfully.');
        await browser.close();
    } catch (e) {
        console.error('Error occurred:', e);
    }
})();