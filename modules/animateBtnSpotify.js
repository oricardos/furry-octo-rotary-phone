export default function animateBtnSpotify() {
    const btnSave = document.querySelectorAll('[data-save="save"]');
    const loading = document.querySelectorAll('.lds-ring');
    const saveText = document.querySelectorAll('.save');
    const saveIcon = document.querySelectorAll('.fa-check-circle');


    function savePlaylistAnimation(id) {

        loading.forEach(item => {
            if (item.parentElement.id == id) 
                item.classList.add('d-flex');
            
        });

        saveText.forEach(item => {
            if (item.parentElement.id == id) 
                item.style.display = 'none';
        });

        setTimeout(() => {
            loading.forEach(item => {
                if (item.parentElement.id == id) 
                    item.classList.remove('d-flex');
            });

            saveIcon.forEach(item => {
                if (item.parentElement.id == id) 
                    item.style.display = 'flex';
            });
        },1500);
        
    }

    btnSave.forEach(btn => {
        btn.addEventListener('click', function btnAnimation() {
            savePlaylistAnimation(btn.id);
            btn.removeEventListener('click', btnAnimation)
        })
    });

    // ATIVA O TOOLTIP POR CLICK OU HOVER
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
}

