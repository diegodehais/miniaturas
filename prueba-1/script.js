// Función para abrir el modal
function openImageModal(imageSrc, caption) {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    var captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    captionText.innerHTML = caption;
}

// Función para cerrar el modal
function closeImageModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}
