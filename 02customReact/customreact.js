const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click here.."
}

const domContainer = document.getElementById('root');

function curstomRender(ele, container){

    /*
    const domElement = document.createElement(ele.type);
    domElement.innerHTML = ele.children;
    domElement.setAttribute('href', ele.props.href);
    domElement.setAttribute('target', ele.props.target);

    container.appendChild(domElement);

    */

    const domElement = document.createElement(ele.type);
    domElement.innerHTML = ele.children;

    for(const prop in ele.props){
        if(prop == ele.children) continue;
        domElement.setAttribute(prop, ele.props[prop]);
    }
    container.appendChild(domElement);
}

curstomRender(reactElement, domContainer);