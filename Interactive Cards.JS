        const wrapper = document.querySelector('.wrapper');
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.add('blur');
                    }
                });
            });

            card.addEventListener('mouseleave', () => {
                cards.forEach(otherCard => {
                    otherCard.classList.remove('blur');
                });
            });
        });
    
