console.log("Inbox ai Extension - Content Script Loaded");


function createAiButtobn(){

}
function findComposeToolBar(){

}

function injectButton() { 
    const existingButton = document.querySelector('.ai-reply-button');
    if(existingButton) existingButton.remove();

    const toolbar = findComposeToolBar();

    if(toolbar){
        console.log("Toolbar not found");
        return;
    }
    console.log("Toolbar Found, Creating AI Button");
    const button = createAiButtobn();
    button.childList.add('ai-reply-button');

    button.addEventListener('click', async () =>{

    })

    toolbar.insertBefore(button, toolbar.firstChild);
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
                (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );

        if (hasComposeElements) {
            console.log("Compose Windows Detected ");
            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body,{
    childList: true,
    subtree: true
})