import report from "multiple-cucumber-html-reporter";

report.generate({

    //Mention the json file location
    jsonDir: "./reports",

    //Mention report location [where to store your report]
    reportPath: "./reports/html",

    metadata: {
        browser: {
            name: "Chromium",
            version: "Latest"
        },
        device: "Local Machine",
        platform: {
            name: "Windows",
            version: "11"
        }
    },

    customData: {
        data: [
            { label: "Project", value: "Playwright Cucumber Js" },
            { label: "Release", value: "1.0" },
            { label: "Execution Start Time", value: new Date().toLocaleString() }
        ]
    },

    displayDuration: true,
    openReportInBrowser: true,
    pageTitle: "Automation Test Report",
    reportName: "Playwright Automation Report"

})