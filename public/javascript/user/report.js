document.addEventListener('DOMContentLoaded', function() {
    const incidentForm = document.getElementById('incidentForm');
    const reportForm = document.getElementById('reportForm');
    const reportConfirmation = document.getElementById('reportConfirmation');
    const mediaUpload = document.getElementById('mediaUpload');
    const mediaInput = document.getElementById('mediaInput');
    const uploadedFiles = document.getElementById('uploadedFiles');
    const incidentType = document.getElementById('incidentType');
    const otherIncidentGroup = document.getElementById('otherIncidentGroup');
    
    // Handle incident type selection
    incidentType.addEventListener('change', function() {
        if (this.value === 'other') {
            otherIncidentGroup.style.display = 'block';
        } else {
            otherIncidentGroup.style.display = 'none';
        }
    });
    
    // Handle media upload click
    mediaUpload.addEventListener('click', function() {
        mediaInput.click();
    });
    
    // Handle file selection
    mediaInput.addEventListener('change', function() {
        const files = Array.from(this.files);
        
        uploadedFiles.innerHTML = '';
        
        files.forEach(file => {
            const fileSize = (file.size / (1024 * 1024)).toFixed(2); // Convert to MB
            
            if (fileSize > 20) {
                alert(`File ${file.name} exceeds the 20MB limit.`);
                return;
            }
            
            const fileItem = document.createElement('div');
            fileItem.style.display = 'flex';
            fileItem.style.alignItems = 'center';
            fileItem.style.marginTop = '10px';
            fileItem.style.padding = '8px';
            fileItem.style.backgroundColor = 'var(--light-gray)';
            fileItem.style.borderRadius = '5px';
            
            let icon = 'fa-file';
            if (file.type.startsWith('image/')) {
                icon = 'fa-file-image';
            } else if (file.type.startsWith('video/')) {
                icon = 'fa-file-video';
            }
            
            fileItem.innerHTML = `
                <i class="fas ${icon}" style="margin-right: 10px; color: var(--primary-color);"></i>
                <div style="flex-grow: 1;">
                    <div style="font-weight: 600;">${file.name}</div>
                    <div style="font-size: 0.8rem; color: var(--dark-gray);">${fileSize} MB</div>
                </div>
                <i class="fas fa-times" style="cursor: pointer; color: var(--dark-gray);"
                   onclick="this.parentNode.remove()"></i>
            `;
            
            uploadedFiles.appendChild(fileItem);
        });
    });
    
    // Handle form submission
    incidentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate submission
        reportForm.style.display = 'none';
        reportConfirmation.style.display = 'block';
        
        // Generate random tracking ID (in real implementation, this would come from the server)
        const randomId = Math.floor(Math.random() * 90000000) + 10000000;
        document.getElementById('trackingId').textContent = `RPT-${randomId}`;
    });
});

// Reset form function
function resetForm() {
    document.getElementById('incidentForm').reset();
    document.getElementById('uploadedFiles').innerHTML = '';
    document.getElementById('otherIncidentGroup').style.display = 'none';
    document.getElementById('reportForm').style.display = 'block';
    document.getElementById('reportConfirmation').style.display = 'none';
}
