import $ from 'jquery';
import Swal from 'sweetalert2';

import templates from '../data/templates.json';

// ? WANGY
const wangy = template => {
    const name = $('#nama').val();
    if (!name) return;

    const setWangy = () => {
        const nameLower = name.toLowerCase();
        const nameUpper = name.toUpperCase();
        const nameUpperFirst = name.charAt(0).toUpperCase() + name.slice(1);
        const nameUpperLong = nameUpper + nameUpper.charAt(name.length - 1).repeat(10);

        let text = template.text;
        text = text.replaceAll(':nameLower:', nameLower);
        text = text.replaceAll(':nameUpper:', nameUpper);
        text = text.replaceAll(':nameUpperFirst:', nameUpperFirst);
        text = text.replaceAll(':nameUpperLong:', nameUpperLong);

        $('#isi').val(text);
    };

    if (!template.sensitive) return setWangy();

    Swal.fire({
        title: 'Warning!',
        text: 'Template ini mengandung kata kata sensitif! Yakin mau melihat hasilnya?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `Nevermind`,
    }).then(result => {
        if (result.isConfirmed) {
            setWangy();
        }
    });
};

// ? render the button
templates.forEach((template, index) => {
    const button = $('<button>').text(template.name);

    button.addClass(['btn', 'bg-primary', 'me-2']);
    button.on('click', () => {
        wangy(template);
    });

    if (index > 2) button.addClass('mt-2');

    $('#btn-templates').append(button);
});

// ? copy to clipboard
$('#btn-copy').on('click', () => {
    const text = $('#isi').val();
    navigator.clipboard.writeText(text);

    Swal.fire({
        icon: 'success',
        title: 'Copied!',
        text: 'Hasil berhasil di-copy ke clipboard!',
    });
});

// ? clear textbox
$('#btn-remove-hasil').on('click', () => {
    $('#isi').val('');
});

// ? dark theme
const setTheme = isDark => {
    $('.dark-mode').toggleClass('d-none');
    $('.light-mode').toggleClass('d-none');

    if (isDark) {
        $('body').addClass('dark');
        $('#theme-color').attr('content', '#FFFFFF');
        localStorage.setItem('theme', 'dark');
    } else {
        $('body').removeClass('dark');
        $('#theme-color').attr('content', '#1A202C');
        localStorage.removeItem('theme');
    }
};
if (localStorage.getItem('theme') == 'dark') {
    setTheme(true);
}

// ? toggle dark mode
$('.dark-mode').on('click', () => {
    setTheme(true);
});
$('.light-mode').on('click', () => {
    setTheme(false);
});
