$(function() {
  makeBlogArea();
});

function makeBlogArea() {
  var blog_info_list = getBlogInfoList();
  var color = [
    'white',
    'grey'
  ];
  var _out = "";


  for (var i = 0; i < blog_info_list.length; i++) {
    var date = blog_info_list[i].date;
    var title = blog_info_list[i].title;
    var intro = blog_info_list[i].intro;
    var link = blog_info_list[i].link;
    _out += '<div id="' + color[i % 2] + '">';
    _out += ' <div class="container">';
    _out += '   <div class="col-lg-8 col-lg-offset-2">';
    _out += '    <p>';
    _out += '      <bd>' + date + '</bd>';
    _out += '    </p>';
    _out += '    <h4><a href="' + link + '">' + title + '</a></h4>';
    _out += '    <p>' + intro + '</p>';
    // _out += '     <p><a href="' + link + '">Continue Reading...</a></p>';
    _out += '   </div>';
    _out += '  </div>';
    _out += ' </div>';
    _out += '</div>';
  }

  $("#blog_area").html(_out);
}

function getBlogInfoList() {
  // var file = new File();
  var str = window.location.href.split('/').pop();

  var blog_info_list = [
    {
      date: "2022/1/30",
      title: "富山美術館巡り",
      intro: "いっぱいびじゅつかんいく",
      link: "blog20220130"
    },
    {
      date: "2022/1/22",
      title: "旅行",
      intro: "友人の慰安旅行で宇奈月温泉に行く",
      link: "blog20220122"
    },
    {
      date: "2022/1/22",
      title: "旅行",
      intro: "友人の慰安旅行で宇奈月温泉に行く",
      link: "blog20220122"
    },
    {
      date: "2022/1/21",
      title: "mdファイル奮闘",
      intro: "test",
      link: "blog20220121"
    },
    {
      date: "dd",
      title: "te",
      intro: "test",
      link: ""
    },
    {
      date: "dd",
      title: "te",
      intro: "test",
      link: ""
    }
  ];

  return blog_info_list;
}
