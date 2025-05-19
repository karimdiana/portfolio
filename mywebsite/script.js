document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

function handleDownload(event) {
    event.preventDefault();
    
    // Create blob with dummy PDF content (replace with actual PDF)
    const pdfContent = new Uint8Array([/* your PDF binary data here */]);
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    
    // Create download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'resume_DianaKarim.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
} 