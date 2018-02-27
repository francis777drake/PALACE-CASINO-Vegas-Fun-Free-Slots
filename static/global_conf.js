const GlobalConfigs = {
  pageTitle: "PALACE CASINO Vegas Fun Free Slots, Video Poker & Bonuses on real money!",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://azinoazino.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://azinoazino.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://azinoazino.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://azinoazino.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://azinoazino.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://azinoazino.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "deep-purple lighten-3", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



