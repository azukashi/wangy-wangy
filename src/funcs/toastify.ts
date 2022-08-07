import Toastify from 'toastify-js';

export const success = (text: string) => {
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
            background: '#198754',
            'border-radius': '0.365rem',
        },
    }).showToast();
};

export const error = (text: string) => {
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
            background: '#dc3545',
            'border-radius': '0.365rem',
        },
    }).showToast();
};

export const primary = (text: string) => {
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
            background: '#0d6efd',
            'border-radius': '0.365rem',
        },
    }).showToast();
};

export const warning = (text: string) => {
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
            background: '#ffc107',
            color: '#1a202c',
            'border-radius': '0.365rem',
        },
    }).showToast();
};

export const info = (text: string) => {
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
            background: '#0dcaf0',
            color: '#1a202c',
            'border-radius': '0.365rem',
        },
    }).showToast();
};

export const secondary = (text: string) => {
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'left',
        stopOnFocus: true,
        style: {
            background: '#6c757d',
            'border-radius': '0.365rem',
        },
    }).showToast();
};
