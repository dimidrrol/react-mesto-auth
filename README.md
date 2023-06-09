# Проект: Место Россия

### Обзор  
На сайте в основном блоке есть профиль, в котором на данный момент можно при помощи интерактивной  
кнопки открыть **форму**, в которой можно вписать новое имя и род занятий, которые после нажатия  
на кнопку сохранить **применяются** в профиле. Во втром основном блоке контента заведены карточки  
с фотографиями и описаниями, пользователь может нажать на большую кнопку правее профиля, после чего  
у него откроется **форма**, в которой он сможет добавить при помощи *ссылки* картинку и написать  
к ней описание. После клика на кнопку создать на сайте появится новая форма с фотографией и  
описанием, которые задал пользователь. Карточки с фотографиями можно **лайкать** нажав на соответствующую кнопку с сердечком. Так же в карточках при клике по фотографии, откроется ее копия в увеличеном размере.  

### Используемые технологии  
*Адаптивная* верстка выполнена при помощи:  
1. display: **grid**;  
2. display: **flex**;  
3. **@media**.  

Функционал выполненый при помощи **JavaScript** и **React**:  
1. На сайте выполнена авторизация и регистрация пользователя, с последующим запоминанием токена пользователя.
2. Все попапы на сайте можно закрыть по нажатию на крестик, сам попап и клавишей "Esc" на клавиатуре.
3. При клике по фотографии карточек, открывается попап с увеличенной фотографией.
4. Всю информацию о пользователе можно менять, в том числе и аватар.
5. Реализованно добавление новых карточек с фотографиями на сайт.
6. У каждой карточки созданной пользователем есть возможность удаления, кликом по соответствующей иконке.
7. У каждой карточки есть собственный счетчик лайков.

Ссылка на gh-pages: https://dimidrrol.github.io/react-mesto-auth/
