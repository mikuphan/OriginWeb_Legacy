// ... thêm các ngôn ngữ khác nếu có
function filterLanguages() {
  const query = document
    .getElementById("language_search_input")
    .value.toLowerCase();
  const buttons = document.querySelectorAll(".lang_button");

  buttons.forEach((btn) => {
    const label = btn.querySelector(".lang_label");
    if (!label) return; // nếu không có .lang_label thì bỏ qua
    const name = label.textContent.toLowerCase();
    btn.style.display = name.includes(query) ? "flex" : "none";
  });
}

function selectLanguage(btn) {
  const allButtons = document.querySelectorAll(".lang_button");
  allButtons.forEach((el) => el.classList.remove("selected_language"));

  // Thêm class selected vào nút vừa bấm
  btn.classList.add("selected_language");
}
function en_language() {
  localStorage.setItem("language", "en");

  document.getElementById("name_setting").textContent = "Settings";
  document.getElementById("about_name_setting").textContent = "About";
  document.getElementById("about_name_small_setting").textContent =
    "OS Information";
  document.getElementById("animation_name_setting").textContent = "Animation";
  document.getElementById("animation_name_small_setting").textContent =
    "Animation Speed";
  document.getElementById("theme_name_setting").textContent = "Theme";
  document.getElementById("theme_name_small_setting").textContent =
    "Wallpaper · Fingerprint";

  back.textContent = "About";
  back2.textContent = "Animation";
  back3.textContent = "Theme";
  back4.textContent = "Wallpaper";
  back5.textContent = "Always On Display";
  back6.textContent = "Back";
  back7.textContent = "Credits";
  back8.textContent = "Home Screen";
  back9.textContent = "Fingerprint";
  back10.textContent = "Version";

  document.getElementById("Vesion").textContent = "Version";
  document.getElementById("Develop").textContent = "Developer";
  document.getElementById("Blur").textContent = "Blur";
  document.getElementById("Lag_on_some_phone").textContent =
    "Lags on some devices";

  document.getElementById("setting_title_AOD").textContent =
    "Always On Display";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "Hide Wallpaper";

  document.getElementById("wallpaper_name").textContent = "Wallpaper";
  document.getElementById("lock_screen_name").textContent = "Lock Screen";
  document.getElementById("finger_print_name").textContent = "Finger Print";
  document.getElementById("home_screen_name").textContent = "Home Screen";

  document.getElementById("Font_size").textContent = "Font Size";

  document.getElementById("btn-white").textContent = "White";
  document.getElementById("btn-blue").textContent = "Blue";

  document.getElementById("size_icon_title").textContent = "Icon Size:";
  document.getElementById("dock_bar_title").textContent = "Dock Bar";
  document.getElementById("dark_mode_title").textContent = "Dark Mode";
  document.getElementById("icon_packs_title").textContent = "Icon Packs";
  //document.getElementById("icon_packs_small_title").textContent = "Coming Soon";
  document.getElementById("note_dark_mode").textContent =
    "Note: Don't use your browser's dark mode";

  document.getElementById("Dialer").textContent = "Dialer";
  document.getElementById("Contacts").textContent = "Contacts";
  document.getElementById("Favorites").textContent = "Favorites";

  document.getElementById("left-text-tb").textContent = "Notification Center";
}

target.innerText += "\u2764\uFE0F";

function vi_language() {
  localStorage.removeItem("language");
  localStorage.setItem("language", "vi");

  document.getElementById("name_setting").textContent = "Cài đặt";
  document.getElementById("about_name_setting").textContent = "Giới thiệu";
  document.getElementById("about_name_small_setting").textContent =
    "Thông tin hệ điều hành";
  document.getElementById("animation_name_setting").textContent = "Hoạt ảnh";
  document.getElementById("animation_name_small_setting").textContent =
    "Tốc độ hoạt ảnh";
  document.getElementById("theme_name_setting").textContent = "Chủ đề";
  document.getElementById("theme_name_small_setting").textContent =
    "Hình nền · Vân tay";

  back.textContent = "Giới thiệu";
  back2.textContent = "Hoạt ảnh";
  back3.textContent = "Chủ đề";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "Hình nền";
  back5.textContent = "Always on display";
  back6.textContent = "Thoát";
  back7.textContent = "Credits";
  back8.textContent = "Màn hình chính";
  back9.textContent = "Vân tay";
  back10.textContent = "Phiên bản";

  document.getElementById("Vesion").textContent = "Phiên bản";
  document.getElementById("Develop").textContent = "Tác giả";
  document.getElementById("Blur").textContent = "Làm mờ";
  document.getElementById("Lag_on_some_phone").textContent =
    "Lag trên một số điện thoại";

  document.getElementById("setting_title_AOD").textContent =
    "Always on display";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "Ẩn hình nền";

  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "Hình nền";
  document.getElementById("lock_screen_name").textContent = "Màn hình khóa";
  document.getElementById("finger_print_name").textContent = "Vân tay";
  document.getElementById("home_screen_name").textContent = "Màn hình chính";

  document.getElementById("btn1").textContent = "Kiểu 1";
  document.getElementById("btn2").textContent = "Kiểu 2";
  document.getElementById("Font_color").textContent = "Màu chữ";
  document.getElementById("Font_size").textContent = "Kích cỡ chữ";

  document.getElementById("btn-white").textContent = "Trắng";
  document.getElementById("btn-blue").textContent = "Xanh dương";

  document.getElementById("size_icon_title").textContent =
    "Kích thước biểu tượng:";
  document.getElementById("dock_bar_title").textContent = "Thanh dock";
  document.getElementById("dark_mode_title").textContent = "Chế độ tối";
  document.getElementById("icon_packs_title").textContent = "Gói biểu tượng";
  //document.getElementById("icon_packs_small_title").textContent = "Sắp ra mắt";
  document.getElementById("note_dark_mode").textContent =
    "Lưu ý: Không sử dụng chế độ tối của trình duyệt";

  document.getElementById("Dialer").textContent = "Bàn phím";
  document.getElementById("Contacts").textContent = "Danh bạ";
  document.getElementById("Favorites").textContent = "Yêu thích";

  document.getElementById("left-text-tb").textContent = "Trung tâm thông báo";
}

function ru_language() {
  // nga
  localStorage.removeItem("language");
  localStorage.setItem("language", "ru");

  document.getElementById("name_setting").textContent = "Настройки";
  document.getElementById("about_name_setting").textContent = "О программе";
  document.getElementById("about_name_small_setting").textContent =
    "Информация об ОС";
  document.getElementById("animation_name_setting").textContent = "Анимация";
  document.getElementById("animation_name_small_setting").textContent =
    "Скорость анимации";
  document.getElementById("theme_name_setting").textContent = "Тема";
  document.getElementById("theme_name_small_setting").textContent =
    "Обои · отпечаток пальца";

  back.textContent = "О программе";
  back2.textContent = "Анимация";
  back3.textContent = "Тема";

  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "Обои";
  back5.textContent = "Always on display"; // Không dịch dòng này
  back6.textContent = "Сохранить";
  back7.textContent = "Благодарности";
  back8.textContent = "Главный экран";
  back9.textContent = "Отпечаток пальца";
  back10.textContent = "Версия";

  document.getElementById("Vesion").textContent = "Версия";
  document.getElementById("Develop").textContent = "Разработка";

  document.getElementById("Blur").textContent = "Размытие";
  document.getElementById("Lag_on_some_phone").textContent =
    "Задержка на некоторых телефонах";

  document.getElementById("setting_title_AOD").textContent =
    "Always on display";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "Скрыть обои";

  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "Обои";
  document.getElementById("lock_screen_name").textContent = "Экран блокировки";
  document.getElementById("finger_print_name").textContent = "Отпеч. пальца";
  document.getElementById("home_screen_name").textContent = "Главный экран";

  document.getElementById("btn1").textContent = "Стиль 1";
  document.getElementById("btn2").textContent = "Стиль 2";
  document.getElementById("Font_color").textContent = "Цвет шрифта";
  document.getElementById("Font_size").textContent = "Размер шрифта";

  document.getElementById("btn-white").textContent = "Белый";
  document.getElementById("btn-blue").textContent = "Синий";

  document.getElementById("size_icon_title").textContent = "Размер иконки:";
  document.getElementById("dock_bar_title").textContent = "Панель приложений";
  document.getElementById("dark_mode_title").textContent = "Тёмная тема";
  document.getElementById("icon_packs_title").textContent = "Пакеты иконок";
  //document.getElementById("icon_packs_small_title").textContent = "Скоро будет";
  document.getElementById("note_dark_mode").textContent =
    "Примечание: не используйте тёмную тему браузера";

  document.getElementById("Dialer").textContent = "Набор номера";
  document.getElementById("Contacts").textContent = "Контакты";
  document.getElementById("Favorites").textContent = "Избранное";

  document.getElementById("left-text-tb").textContent = "Центр уведомлений";
}

function it_language() {
  // ý
  localStorage.removeItem("language");
  localStorage.setItem("language", "it");

  document.getElementById("name_setting").textContent = "Impostazioni";
  document.getElementById("about_name_setting").textContent = "Informazioni";
  document.getElementById("about_name_small_setting").textContent =
    "Informazioni sul sistema operativo";
  document.getElementById("animation_name_setting").textContent = "Animazione";
  document.getElementById("animation_name_small_setting").textContent =
    "Velocità animazione";
  document.getElementById("theme_name_setting").textContent = "Tema";
  document.getElementById("theme_name_small_setting").textContent =
    "Sfondo · Impronta digitale";
  back.textContent = "Informazioni";
  back2.textContent = "Animazione";
  back3.textContent = "Tema";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "Sfondo";
  back5.textContent = "Always on Display";
  back6.textContent = "Salva";
  back7.textContent = "Crediti";
  back8.textContent = "Schermata principale";
  back9.textContent = "Impronta digitale";
  back10.textContent = "Versione";
  document.getElementById("Vesion").textContent = "Versione";
  document.getElementById("Develop").textContent = "Sviluppo";
  document.getElementById("Blur").textContent = "Sfocatura";
  document.getElementById("Lag_on_some_phone").textContent =
    "Lagga su alcuni telefoni";
  document.getElementById("setting_title_AOD").textContent =
    "Always on Display";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "Nascondi sfondo";
  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "Sfondo";
  document.getElementById("lock_screen_name").textContent =
    "Schermata di blocco";
  document.getElementById("finger_print_name").textContent =
    "Impronta digitale";
  document.getElementById("home_screen_name").textContent =
    "Schermata principale";
  document.getElementById("btn1").textContent = "Stile 1";
  document.getElementById("btn2").textContent = "Stile 2";
  document.getElementById("Font_color").textContent = "Colore del testo";
  document.getElementById("Font_size").textContent = "Dimensione del testo";
  document.getElementById("btn-white").textContent = "Bianco";
  document.getElementById("btn-blue").textContent = "Blu";
  document.getElementById("size_icon_title").textContent = "Dimensione icona";
  document.getElementById("dock_bar_title").textContent =
    "Barra delle applicazioni";
  document.getElementById("dark_mode_title").textContent = "Modalità scura";
  document.getElementById("icon_packs_title").textContent =
    "Pacchetti di icone";
  //document.getElementById("icon_packs_small_title").textContent =
  ("Prossimamente");
  document.getElementById("note_dark_mode").textContent =
    "Nota: non usare la modalità scura del browser";
  document.getElementById("Dialer").textContent = "Compositore telefonico";
  document.getElementById("Contacts").textContent = "Contatti";
  document.getElementById("Favorites").textContent = "Preferiti";
}
//thank you ❤️❤️❤️❤️❤️

function ar_language() {
  // العربية

  localStorage.removeItem("language");
  localStorage.setItem("language", "ar");

  document.getElementById("name_setting").textContent = "الاعدادات";
  document.getElementById("about_name_setting").textContent = "عن";
  document.getElementById("about_name_small_setting").textContent =
    "معلومات النظام";
  document.getElementById("animation_name_setting").textContent =
    "الرسوم المتحركة";
  document.getElementById("animation_name_small_setting").textContent =
    "سرعة الرسوم المتحركة";
  document.getElementById("theme_name_setting").textContent = "السمات";
  document.getElementById("theme_name_small_setting").textContent =
    "الخلفيات ، بصمة الإصبع";

  back.textContent = "عن";
  back2.textContent = "الرسوم المتحركة";
  back3.textContent = "السمات";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "الخلفيات";
  back5.textContent = "دائما على الشاشة";
  back6.textContent = "حفظ";
  back7.textContent = "الاعتمادات";
  back8.textContent = "الشاشة الرئيسية";
  back9.textContent = "بصمة الاصبع";
  back10.textContent = "النسخة";

  document.getElementById("Vesion").textContent = "النسخة";
  document.getElementById("Develop").textContent = "المطور";
  document.getElementById("Blur").textContent = "الضبابية";
  document.getElementById("Lag_on_some_phone").textContent =
    "يتأخر في بعض الهواتف";
  document.getElementById("setting_title_AOD").textContent = "دائما على الشاشة";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "إخفاء الخلفية";
  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "الخلفيات";
  document.getElementById("lock_screen_name").textContent = "شاشة القفل";
  document.getElementById("finger_print_name").textContent = "بصمة الاصبع";
  document.getElementById("home_screen_name").textContent = "الشاشة الرئيسية";
  document.getElementById("btn1").textContent = "الشكل 1";
  document.getElementById("btn2").textContent = "الشكل 2";
  document.getElementById("Font_color").textContent = "لون الخط";
  document.getElementById("Font_size").textContent = "حجم الخط";
  document.getElementById("btn-white").textContent = "ابيض";
  document.getElementById("btn-blue").textContent = "ازرق";
  document.getElementById("size_icon_title").textContent = "حجم الايقونة";
  document.getElementById("dock_bar_title").textContent = "شريط الارساء";
  document.getElementById("dark_mode_title").textContent = "الوضع الداكن";
  document.getElementById("icon_packs_title").textContent = "حزمة الايقونات";
  //document.getElementById("icon_packs_small_title").textContent = "قريبا";
  document.getElementById("note_dark_mode").textContent =
    "ملاحظة : لا تستخدم الوضع الداكن في المتصفح الخاص بك";
  document.getElementById("Dialer").textContent = "المسجل";
  document.getElementById("Contacts").textContent = "جهات الاتصال";
  document.getElementById("Favorites").textContent = "المفضلة";

  document.getElementById("language_select").value = "ar";
}

function zh_language() {
  localStorage.setItem("language", "zh");

  document.getElementById("name_setting").textContent = "设置";
  document.getElementById("about_name_setting").textContent = "关于";
  document.getElementById("about_name_small_setting").textContent =
    "操作系统信息";
  document.getElementById("animation_name_setting").textContent = "动画";
  document.getElementById("animation_name_small_setting").textContent =
    "动画速度";
  document.getElementById("theme_name_setting").textContent = "主题";
  document.getElementById("theme_name_small_setting").textContent =
    "壁纸 · 指纹";
  back.textContent = "关于";
  back2.textContent = "动画";
  back3.textContent = "主题";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "壁纸";
  back5.textContent = "息屏显示";
  back6.textContent = "保存";
  back7.textContent = "致谢";
  back8.textContent = "主屏幕";
  back9.textContent = "指纹";
  back10.textContent = "版本";
  document.getElementById("Vesion").textContent = "版本";
  document.getElementById("Develop").textContent = "开发";
  document.getElementById("Blur").textContent = "模糊";
  document.getElementById("Lag_on_some_phone").textContent = "某些手机会卡顿";
  document.getElementById("setting_title_AOD").textContent = "息屏显示";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "隐藏壁纸";
  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "壁纸";
  document.getElementById("lock_screen_name").textContent = "锁屏";
  document.getElementById("finger_print_name").textContent = "指纹";
  document.getElementById("home_screen_name").textContent = "主屏幕";
  document.getElementById("btn1").textContent = "样式1";
  document.getElementById("btn2").textContent = "样式2";
  document.getElementById("Font_color").textContent = "字体颜色";
  document.getElementById("Font_size").textContent = "字体大小";
  document.getElementById("btn-white").textContent = "白色";
  document.getElementById("btn-blue").textContent = "蓝色";
  document.getElementById("size_icon_title").textContent = "图标大小：";
  document.getElementById("dock_bar_title").textContent = "底部栏";
  document.getElementById("dark_mode_title").textContent = "深色模式";
  document.getElementById("icon_packs_title").textContent = "图标包";
  //document.getElementById("icon_packs_small_title").textContent = "敬请期待";
  document.getElementById("note_dark_mode").textContent =
    "注意：不要使用浏览器的深色模式";
  document.getElementById("Dialer").textContent = "拨号器";
  document.getElementById("Contacts").textContent = "联系人";
  document.getElementById("Favorites").textContent = "收藏夹";
  document.getElementById("left-text-tb").textContent = "通知中心";
}

function ja_language() {
  localStorage.setItem("language", "ja");

  document.getElementById("name_setting").textContent = "設定";
  document.getElementById("about_name_setting").textContent = "バージョン情報";
  document.getElementById("about_name_small_setting").textContent = "OS情報";
  document.getElementById("animation_name_setting").textContent =
    "アニメーション";
  document.getElementById("animation_name_small_setting").textContent =
    "アニメーション速度";
  document.getElementById("theme_name_setting").textContent = "テーマ";
  document.getElementById("theme_name_small_setting").textContent =
    "壁紙・指紋";
  back.textContent = "バージョン情報";
  back2.textContent = "アニメーション";
  back3.textContent = "テーマ";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "壁紙";
  back5.textContent = "常時表示";
  back6.textContent = "保存";
  back7.textContent = "クレジット";
  back8.textContent = "ホーム画面";
  back9.textContent = "指紋";
  back10.textContent = "バージョン";
  document.getElementById("Vesion").textContent = "バージョン";
  document.getElementById("Develop").textContent = "開発";
  document.getElementById("Blur").textContent = "	ぼかし";
  document.getElementById("Lag_on_some_phone").textContent =
    "一部の端末で遅延が発生する場合があります";
  document.getElementById("setting_title_AOD").textContent = "常時表示";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "壁紙を非表示";
  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "壁紙";
  document.getElementById("lock_screen_name").textContent = "ロック画面";
  document.getElementById("finger_print_name").textContent = "指紋";
  document.getElementById("home_screen_name").textContent = "ホーム画面";
  document.getElementById("btn1").textContent = "スタイル1";
  document.getElementById("btn2").textContent = "スタイル2";
  document.getElementById("Font_color").textContent = "フォントの色";
  document.getElementById("Font_size").textContent = "フォントサイズ";
  document.getElementById("btn-white").textContent = "白";
  document.getElementById("btn-blue").textContent = "青";
  document.getElementById("size_icon_title").textContent = "アイコンサイズ：";
  document.getElementById("dock_bar_title").textContent = "ドックバー";
  document.getElementById("dark_mode_title").textContent = "ダークモード";
  document.getElementById("icon_packs_title").textContent = "アイコンパック";
  //document.getElementById("icon_packs_small_title").textContent = "近日公開";
  document.getElementById("note_dark_mode").textContent =
    "※ブラウザのダークモードは使用しないでください";
  document.getElementById("Dialer").textContent = "ダイヤラー";
  document.getElementById("Contacts").textContent = "連絡先";
  document.getElementById("Favorites").textContent = "お気に入り";
  document.getElementById("left-text-tb").textContent = "通知センター";
}

function tl_language() {
  localStorage.setItem("language", "tl");

  document.getElementById("name_setting").textContent = "Settings";
  document.getElementById("about_name_setting").textContent = "About";
  document.getElementById("about_name_small_setting").textContent =
    "Impormasyon ng OS";
  document.getElementById("animation_name_setting").textContent = "Animation";
  document.getElementById("animation_name_small_setting").textContent =
    "Bilis ng animation";
  document.getElementById("theme_name_setting").textContent = "Tema";
  document.getElementById("theme_name_small_setting").textContent =
    "Wallpaper at fingerprint";
  back.textContent = "About";
  back2.textContent = "Animation";
  back3.textContent = "Tema";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "Wallpaper";
  back5.textContent = "Palaging nakadisplay";
  back6.textContent = "Iligtas";
  back7.textContent = "Mga kredito";
  back8.textContent = "Home screen";
  back9.textContent = "Fingerprint";
  back10.textContent = "Version ng OS";
  document.getElementById("Vesion").textContent = "Version ng OS";
  document.getElementById("Develop").textContent = "Mga nag-develop";
  document.getElementById("Blur").textContent = "Tema";
  document.getElementById("Lag_on_some_phone").textContent =
    "Naglag sa mga phones";
  document.getElementById("setting_title_AOD").textContent =
    "Palaging nakadisplay";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "Itago ang wallpaper";
  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "Wallpaper";
  document.getElementById("lock_screen_name").textContent = "Lock screen";
  document.getElementById("finger_print_name").textContent = "Fingerprint";
  document.getElementById("home_screen_name").textContent = "Home screen";
  document.getElementById("btn1").textContent = "Style 1";
  document.getElementById("btn2").textContent = "Style 2";
  document.getElementById("Font_color").textContent = "Color ng font";
  document.getElementById("Font_size").textContent = "Laki ng font";
  document.getElementById("btn-white").textContent = "Puti";
  document.getElementById("btn-blue").textContent = "Asul";
  document.getElementById("size_icon_title").textContent = "Laki ng icon:";
  document.getElementById("dock_bar_title").textContent = "Dock bar";
  document.getElementById("dark_mode_title").textContent = "Dark mode";
  document.getElementById("icon_packs_title").textContent = "Mga icon packs";
  //document.getElementById("icon_packs_small_title").textContent =
  ("Paparating pa..");
  document.getElementById("note_dark_mode").textContent =
    "Note: Huwag gamitin ang dark mode ng iyong browser";
  document.getElementById("Dialer").textContent = "Phone";
  document.getElementById("Contacts").textContent = "Contacts";
  document.getElementById("Favorites").textContent = "Favorites";
  document.getElementById("left-text-tb").textContent = "Notification Center";
}

function pl_language() {
  localStorage.setItem("language", "pl");

  document.getElementById("name_setting").textContent = "Ustawienia";
  document.getElementById("about_name_setting").textContent = "Informacje";
  document.getElementById("about_name_small_setting").textContent =
    "informacje o systemie";
  document.getElementById("animation_name_setting").textContent = "animacje";
  document.getElementById("animation_name_small_setting").textContent =
    "prędkość animacji";
  document.getElementById("theme_name_setting").textContent = "motyw";
  document.getElementById("theme_name_small_setting").textContent =
    "tapeta•odcisk palca";

  back.textContent = "O";
  back2.textContent = "animacje";
  back3.textContent = "motyw";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "tapeta";
  back5.textContent = "zawsze na ekranie";
  back6.textContent = "zapisz";
  back7.textContent = "Pomagali";
  back8.textContent = "ekran główny";
  back9.textContent = "odcisk palca";
  back10.textContent = "wersja";

  document.getElementById("Vesion").textContent = "wersja";
  document.getElementById("Develop").textContent = "pracuje";
  document.getElementById("Blur").textContent = "rozmycie";
  document.getElementById("Lag_on_some_phone").textContent =
    "zacina na niektórych telefonach";

  document.getElementById("setting_title_AOD").textContent =
    "zawsze na ekranie";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "ukryj tapetę";

  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "tapeta";
  document.getElementById("lock_screen_name").textContent = "ekran blokady";
  document.getElementById("finger_print_name").textContent = "odcisk palca";
  document.getElementById("home_screen_name").textContent = "ekran główny";

  document.getElementById("btn1").textContent = "styl 1";
  document.getElementById("btn2").textContent = "styl 2";
  document.getElementById("Font_color").textContent = "kolor czcionki";
  document.getElementById("Font_size").textContent = "rozmiar czcionki";

  document.getElementById("btn-white").textContent = "biały";
  document.getElementById("btn-blue").textContent = "niebieski";
  3;

  document.getElementById("size_icon_title").textContent = "rozmiar ikon";
  document.getElementById("dock_bar_title").textContent = "Pasek aplikacji";
  document.getElementById("dark_mode_title").textContent = "tryb ciemny";
  document.getElementById("icon_packs_title").textContent = "paczka ikon";
  //document.getElementById("icon_packs_small_title").textContent =
  ("Segera hadir");
  document.getElementById("note_dark_mode").textContent =
    "uwaga: nie używaj trybu ciemnego w przeglądarce";

  document.getElementById("Dialer").textContent = "Słuchawka";
  document.getElementById("Contacts").textContent = "Kontakty";
  document.getElementById("Favorites").textContent = "Ulubione";

  document.getElementById("left-text-tb").textContent = "centrum powiadomień";
}

function uk_language() {
  localStorage.setItem("language", "uk");

  document.getElementById("name_setting").textContent = "Налаштування";
  document.getElementById("about_name_setting").textContent = "Про";
  document.getElementById("about_name_small_setting").textContent =
    "Інформація про ОС";
  document.getElementById("animation_name_setting").textContent = "Анімація";
  document.getElementById("animation_name_small_setting").textContent =
    "Швидкість анімації";
  document.getElementById("theme_name_setting").textContent = "Тема";
  document.getElementById("theme_name_small_setting").textContent =
    "Шпалери · відбиток пальця";

  back.textContent = "Про";
  back2.textContent = "Анімація";
  back3.textContent = "Тема";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "Шпалери";
  back5.textContent = "Завжди на дисплеї";
  back6.textContent = "Зберегти";
  back7.textContent = "Подяка";
  back8.textContent = "Головний екран";
  back9.textContent = "Відбиток пальця";
  back10.textContent = "Версія";

  document.getElementById("Vesion").textContent = "Версія";
  document.getElementById("Develop").textContent = "Розробка";
  document.getElementById("Blur").textContent = "Розмиття";
  document.getElementById("Lag_on_some_phone").textContent =
    "Затримка на деяких телефонах";

  document.getElementById("setting_title_AOD").textContent =
    "Завжди на дисплеї";
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "Приховати шпалери";

  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "Шпалери";
  document.getElementById("lock_screen_name").textContent = "Екран блокування";
  document.getElementById("finger_print_name").textContent = "Відбиток пальця";
  document.getElementById("home_screen_name").textContent = "Головний екран";

  document.getElementById("btn1").textContent = "Стиль 1";
  document.getElementById("btn2").textContent = "Стиль 2";
  document.getElementById("Font_color").textContent = "Колір шрифту";
  document.getElementById("Font_size").textContent = "Розмір шрифту";

  document.getElementById("btn-white").textContent = "Білий";
  document.getElementById("btn-blue").textContent = "Синій";

  document.getElementById("size_icon_title").textContent = "Розмір значка:";
  document.getElementById("dock_bar_title").textContent = "Панель Dock";
  document.getElementById("dark_mode_title").textContent = "Темний режим";
  document.getElementById("icon_packs_title").textContent = "Пакети значків";
  //document.getElementById("icon_packs_small_title").textContent = "Скоро";
  document.getElementById("note_dark_mode").textContent =
    "Примітка: Не використовуйте темний режим вашого браузера";

  document.getElementById("Dialer").textContent = "Набір номера";
  document.getElementById("Contacts").textContent = "Контакти";
  document.getElementById("Favorites").textContent = "Вибране";

  document.getElementById("left-text-tb").textContent = "центр сповіщень";
}

function ph_language() {
  localStorage.setItem("language", "ph");

  document.getElementById("name_setting").textContent = "Setting";
  document.getElementById("about_name_setting").textContent = "Tungkol";
  document.getElementById("about_name_small_setting").textContent =
    "Impormasyon sa OS";
  document.getElementById("animation_name_setting").textContent = "Animation";
  document.getElementById("animation_name_small_setting").textContent =
    "Bilis ng Animation"; // Gốc: Speed animation bilis ng animation - "Speed animation" là tiếng Anh, đã loại bỏ để giữ nhất quán
  document.getElementById("theme_name_setting").textContent = "Tema";
  document.getElementById("theme_name_small_setting").textContent =
    "Wallpaper · Fingerprint"; // Gốc: Wallpaper · finger print - Đã sửa "finger print" thành "Fingerprint"

  back.textContent = "Tungkol";
  back2.textContent = "Animation";
  back3.textContent = "Tema";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "Wallpaper"; // Gốc: walpaper - Đã sửa "walpaper" thành "Wallpaper"
  back5.textContent = "Always on Display"; // Gốc: Always on display - Đã sửa thành cách viết hoa phù hợp
  back6.textContent = "Back";
  back7.textContent = "Kredito"; // Gốc: Credits - Dịch sang "Kredito" (Credit)
  back8.textContent = "Home Screen"; // Gốc: Home screen - Đã sửa thành cách viết hoa phù hợp
  back9.textContent = "Fingerprint"; // Gốc: Finger print - Đã sửa "finger print" thành "Fingerprint"
  back10.textContent = "Bersyon"; // Gốc: Vesion - Đã sửa "Vesion" thành "Bersyon" (Version)

  document.getElementById("Vesion").textContent = "Bersyon"; // Gốc: Vesion - Đã sửa "Vesion" thành "Bersyon"
  document.getElementById("Develop").textContent = "Paunlarin"; // Gốc: paunlarin - Đã viết hoa chữ cái đầu
  document.getElementById("Blur").textContent = "Blur"; // Từ này thường không dịch và được giữ nguyên
  document.getElementById("Lag_on_some_phone").textContent =
    "Lag sa Ilang Telepono"; // Gốc: Lag on some phones - Đã sửa "Ibang phones" thành "Ilang Telepono" (More phones)

  document.getElementById("setting_title_AOD").textContent =
    "Always on Display"; // Gốc: Always on display - Đã sửa thành cách viết hoa phù hợp
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "Itago ang Wallpaper"; // Gốc: Hide walpaper - Đã sửa "walpaper" thành "Wallpaper"

  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "Wallpaper";
  document.getElementById("lock_screen_name").textContent = "Lock Screen";
  document.getElementById("finger_print_name").textContent = "Fingerprint"; // Gốc: Finger print - Đã sửa "finger print" thành "Fingerprint"
  document.getElementById("home_screen_name").textContent = "Home Screen";

  document.getElementById("btn1").textContent = "Estilo 1"; // Gốc: Style 1 - Dịch sang "Estilo 1" (Style 1)
  document.getElementById("btn2").textContent = "Estilo 2"; // Gốc: Style 2 - Dịch sang "Estilo 2" (Style 2)
  document.getElementById("Font_color").textContent = "Kulay ng Font";
  document.getElementById("Font_size").textContent = "Laki ng Font";

  document.getElementById("btn-white").textContent = "Puti";
  document.getElementById("btn-blue").textContent = "Asul";

  document.getElementById("size_icon_title").textContent = "Laki ng Icon:"; // Gốc: Size icon - Đã thêm dấu hai chấm và sửa cách viết
  document.getElementById("dock_bar_title").textContent = "Dock Bar";
  document.getElementById("dark_mode_title").textContent = "Dark Mode";
  document.getElementById("icon_packs_title").textContent = "Mga Icon Pack"; // Gốc: icon packs - Đã thêm "Mga" để chỉ số nhiều và viết hoa chữ cái đầu
  //document.getElementById("icon_packs_small_title").textContent = "Malapit Na"; // Gốc: Comming soon - Đã sửa "Comming" thành "Coming" và dịch sang "Malapit Na" (Coming soon)
  document.getElementById("note_dark_mode").textContent =
    "Tandaan: Huwag Gamitin ang Dark Mode ng Iyong Browser"; // Gốc: Note: Don't use dark mode of your :note wag gagamit ng dark mode ng iyong browser:Browser - Đã sửa và làm rõ nghĩa

  document.getElementById("Dialer").textContent = "Dialer";
  document.getElementById("Contacts").textContent = "Mga Contact"; // Gốc: Mga Contacts - Đã sửa "Contacts" thành "Contact" cho đúng ngữ pháp
  document.getElementById("Favorites").textContent = "Mga Paborito"; // Gốc: paborito - Đã thêm "Mga" để chỉ số nhiều và viết hoa chữ cái đầu

  document.getElementById("left-text-tb").textContent = "Notification Center"; // Gốc: notification center - Đã viết hoa chữ cái đầu mỗi từ
}

function ph_language() {
  localStorage.setItem("language", "ph");

  document.getElementById("name_setting").textContent = "Setting";
  document.getElementById("about_name_setting").textContent = "Tungkol";
  document.getElementById("about_name_small_setting").textContent =
    "Impormasyon sa OS";
  document.getElementById("animation_name_setting").textContent = "Animation";
  document.getElementById("animation_name_small_setting").textContent =
    "Speed Animation Bilis Ng Animation"; // Giữ nguyên "Speed animation" và "bilis ng animation", chỉ viết hoa đầu từ
  document.getElementById("theme_name_setting").textContent = "Tema";
  document.getElementById("theme_name_small_setting").textContent =
    "Wallpaper · Finger Print"; // Giữ nguyên "finger print"

  back.textContent = "Tungkol";
  back2.textContent = "Animation";
  back3.textContent = "Tema";
  back4.textContent = document.getElementById("wallpaper_btn_2").textContent =
    "Wallpaper"; // Giữ nguyên "walpaper" từ "Hide walpaper" (nếu có lỗi tương tự)
  back5.textContent = "Always On Display"; // Giữ nguyên "Always on display" nhưng viết hoa đầu từ
  back6.textContent = "Save";
  back7.textContent = "Kredito"; // Giữ nguyên "Credits"
  back8.textContent = "Home Screen"; // Giữ nguyên "Home screen" nhưng viết hoa đầu từ
  back9.textContent = "Finger Print"; // Giữ nguyên "Finger print"
  back10.textContent = "Vesion"; // Giữ nguyên "Vesion"

  document.getElementById("Vesion").textContent = "Vesion"; // Giữ nguyên "Vesion"
  document.getElementById("Develop").textContent = "Paunlarin"; // Giữ nguyên "paunlarin" nhưng viết hoa đầu từ
  document.getElementById("Blur").textContent = "Blur";
  document.getElementById("Lag_on_some_phone").textContent =
    "Lag Sa Ibang Phones"; // Giữ nguyên "Lag on some phones", "Ibang phones" và viết hoa đầu từ

  document.getElementById("setting_title_AOD").textContent =
    "Always On Display"; // Giữ nguyên "Always on display" nhưng viết hoa đầu từ
  document.getElementById("setting_title_hide_wallpaper").textContent =
    "Itago Ang Walpaper"; // Giữ nguyên "Hide walpaper" nhưng viết hoa đầu từ

  document.getElementById("AOD_name").textContent = "AOD";
  document.getElementById("wallpaper_name").textContent = "Wallpaper";
  document.getElementById("lock_screen_name").textContent = "Lock Screen";
  document.getElementById("finger_print_name").textContent = "Finger Print"; // Giữ nguyên "Finger print"
  document.getElementById("home_screen_name").textContent = "Home Screen";

  document.getElementById("btn1").textContent = "Style 1"; // Giữ nguyên "Style 1"
  document.getElementById("btn2").textContent = "Style 2"; // Giữ nguyên "Style 2"
  document.getElementById("Font_color").textContent = "Kulay Ng Font"; // Viết hoa đầu từ
  document.getElementById("Font_size").textContent = "Laki Ng Font"; // Viết hoa đầu từ

  document.getElementById("btn-white").textContent = "Puti";
  document.getElementById("btn-blue").textContent = "Asul";

  document.getElementById("size_icon_title").textContent = "Laki Ng Icon:"; // Giữ nguyên "Laki ng icon" và thêm dấu hai chấm, chỉ viết hoa đầu từ
  document.getElementById("dock_bar_title").textContent = "Dock Bar";
  document.getElementById("dark_mode_title").textContent = "Dark Mode";
  document.getElementById("icon_packs_title").textContent = "Icon Packs"; // Giữ nguyên "icon packs" nhưng viết hoa đầu từ
  //document.getElementById("icon_packs_small_title").textContent =
  ("Dadating Sa Sunod"); // Giữ nguyên "Comming soon" và dịch "dadating sa sunod", chỉ viết hoa đầu từ
  document.getElementById("note_dark_mode").textContent =
    "Note: Wag Gagamit Ng Dark Mode Ng Iyong Browser"; // Giữ nguyên câu gốc và chỉ viết hoa đầu từ

  document.getElementById("Dialer").textContent = "Dialer";
  document.getElementById("Contacts").textContent = "Mga Contacts"; // Giữ nguyên "Mga Contacts"
  document.getElementById("Favorites").textContent = "Paborito"; // Giữ nguyên "paborito" nhưng viết hoa đầu từ

  document.getElementById("left-text-tb").textContent = "Notification Center"; // Giữ nguyên "notification center" nhưng viết hoa đầu từ
}
en_language();
