export default (text = 'Hello World!') => {
    const element = document.createElement('div')
    element.innerHTML = '<p>' + text + '</p>'
    return element
}