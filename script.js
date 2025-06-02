const titles = document.querySelectorAll('nav a span');

        const profileImage = document.querySelector('.circle');

        titles.forEach(title => {
            title.addEventListener('mouseenter', () => {
                titles.forEach(otherTitle => {
                    if (otherTitle !== title) {
                        otherTitle.style.color = 'transparent';
                    }
                });

                profileImage.classList.remove('profile-hidden');
                profileImage.classList.add('profile-visible');
                profileImage.style.marginTop = '50px';
            });

            title.addEventListener('mouseleave', () => {
                titles.forEach(otherTitle => {
                    otherTitle.style.color = '';
                });

                profileImage.classList.remove('profile-visible');
                profileImage.classList.add('profile-hidden');
                profileImage.style.marginTop = '';
            });
        });
