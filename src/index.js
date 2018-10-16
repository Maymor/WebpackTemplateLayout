import component from './component'
import './assets/styles.scss'

console.log('process.env.NODE_ENV = ', process.env.NODE_ENV)
document.body.appendChild(component())