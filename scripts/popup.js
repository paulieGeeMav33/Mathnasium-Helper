// scripts/popup.js



async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('reportBtn');
    
    btn.addEventListener('click', () => {
        console.log("Button clicked! Starting parser...");
        getCurrentTab().then(
            function(currTab){chrome.scripting.executeScript({
            target: {tabId: currTab.id},
            files: ['scripts/parser.js']
        })}
            
        )
        ;
        // runParser();

    });

});

