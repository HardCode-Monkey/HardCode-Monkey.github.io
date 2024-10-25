import { loadSection1 } from './components/section1.js';
import { loadSection2 } from './components/section2.js';
import { loadSection3 } from './components/section3.js';

function navigate(page) {
    const content = document.getElementById('content');

    switch(page) {
        case 'section1':
            loadSection1(content);
            break;
        case 'section2':
            loadSection2(content);
            break;
        case 'section3':
            loadSection3(content);
            break;
        default:
            content.innerHTML = '<p>Page not found.</p>';
    }
}

// Load "section1" by default
navigate('section1');
window.navigate = navigate