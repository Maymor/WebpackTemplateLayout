import style from './assets/styles.scss'

export default (text = 'Hello World!') => {
    const element = document.createElement('div')
    element.innerHTML = '<p>' + text + '</p>'
    element.className = style.greenColor
    return element
}