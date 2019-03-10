export default function template() {
  console.log("template JS loaded");
  /* Here you can use whatever JS you want :) */

  let _windowHeight,
    _titlePartOne,
    _titlePartTwo,
    _titlePartThree,

    _shirtsTitle,
    _shirtsParagraph,
    _shirtsImgTwo,
    _shirtsImgThree,

    _shortsTitle,
    _shortsParagraph,
    _shortsImgOne,
    _shortsImgTwo,

    _shoesTitle,
    _shoesParagraph,
    _shoesImgTwo,
    _shoesImgThree,

    _babiesTitle,
    _babiesParagraph,
    _babiesImgOne,
    _babiesImgTwo,
    _babiesImgThree,

    _jacketTitle,
    _jacketParagraph,
    _jacketImgTwo,

    _pantsTitle,
    _pantsParagraph,
    _pantsImgOne,
    _pantsImgTwo,

    _coatsTitle,
    _coatsParagraph,
    _coatsImgTwo,

    _playlistTitle,
    _instaTitle;

  let windowHeight,
    titlePartOnePos,
    titlePartTwoPos,
    titlePartThreePos,

    shirtsTitlePos,
    shirtsParagraphPos,
    shirtsImgTwoPos,
    shirtsImgThreePos,

    shortsTitlePos,
    shortsParagraphPos,
    shortsImgOnePos,
    shortsImgTwoPos,

    shoesTitlePos,
    shoesParagraphPos,
    shoesImgTwoPos,
    shoesImgThreePos,

    babiesTitlePos,
    babiesParagraphPos,
    babiesImgOnePos,
    babiesImgTwoPos,
    babiesImgThreePos,

    jacketTitlePos,
    jacketParagraphPos,
    jacketImgTwoPos,

    pantsTitlePos,
    pantsParagraphPos,
    pantsImgOnePos,
    pantsImgTwoPos,

    coatsTitlePos,
    coatsParagraphPos,
    coatsImgTwoPos,

    playlistTitlePos,
    instaTitlePos;

  const showItemOnScreen = (item, itemPosition) => {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > (itemPosition - (_windowHeight - 120))) {
      if (!item.hasClass('active')) {
        item.addClass('active');
      }
    } else {
      item.removeClass('active');
    }
  };

  $(document).ready(function() {
    _windowHeight = $(window).height();
    _titlePartOne = $('.part-one');
    _titlePartTwo = $('.part-two');
    _titlePartThree = $('.part-three');
    titlePartOnePos = _titlePartOne.offset().top;
    titlePartTwoPos = _titlePartTwo.offset().top;
    titlePartThreePos = _titlePartThree.offset().top;

    _shirtsTitle = $('.shirts-title');
    _shirtsParagraph = $('.shirts-paragraph');
    _shirtsImgTwo = $('.shirts-img-2');
    _shirtsImgThree = $('.shirts-img-3');
    shirtsTitlePos = _shirtsTitle.offset().top;
    shirtsParagraphPos = _shirtsParagraph.offset().top;
    shirtsImgTwoPos = _shirtsImgTwo.offset().top;
    shirtsImgThreePos = _shirtsImgThree.offset().top;

    _shortsTitle = $('.shorts-title');
    _shortsParagraph = $('.shorts-paragraph');
    _shortsImgOne = $('.shorts-img-1');
    _shortsImgTwo = $('.shorts-img-2');
    shortsTitlePos = _shortsTitle.offset().top;
    shortsParagraphPos = _shortsParagraph.offset().top;
    shortsImgOnePos = _shortsImgOne.offset().top;
    shortsImgTwoPos = _shortsImgTwo.offset().top;

    _shoesTitle = $('.shoes-title');
    _shoesParagraph = $('.shoes-paragraph');
    _shoesImgTwo = $('.shoes-img-2');
    _shoesImgThree = $('.shoes-img-3');
    shoesTitlePos = _shoesTitle.offset().top;
    shoesParagraphPos = _shoesParagraph.offset().top;
    shoesImgTwoPos = _shoesImgTwo.offset().top;
    shoesImgThreePos = _shoesImgThree.offset().top;

    _babiesTitle = $('.babies-title');
    _babiesParagraph = $('.babies-paragraph');
    _babiesImgOne = $('.babies-img-1');
    _babiesImgTwo = $('.babies-img-2');
    _babiesImgThree = $('.babies-img-3');
    babiesTitlePos = _babiesTitle.offset().top;
    babiesParagraphPos = _babiesParagraph.offset().top;
    babiesImgOnePos = _babiesImgOne.offset().top;
    babiesImgTwoPos = _babiesImgTwo.offset().top;
    babiesImgThreePos = _babiesImgThree.offset().top;

    _jacketTitle = $('.jacket-title');
    _jacketParagraph = $('.jacket-paragraph');
    _jacketImgTwo = $('.jacket-img-2');
    jacketTitlePos = _jacketTitle.offset().top;
    jacketParagraphPos = _jacketParagraph.offset().top;
    jacketImgTwoPos = _jacketImgTwo.offset().top;

    _pantsTitle = $('.pants-title');
    _pantsParagraph = $('.pants-paragraph');
    _pantsImgOne = $('.pants-img-1');
    _pantsImgTwo = $('.pants-img-2');
    pantsTitlePos = _pantsTitle.offset().top;
    pantsParagraphPos = _pantsParagraph.offset().top;
    pantsImgOnePos = _pantsImgOne.offset().top;
    pantsImgTwoPos = _pantsImgTwo.offset().top;

    _coatsTitle = $('.coats-title');
    _coatsParagraph = $('.coats-paragraph');
    _coatsImgTwo = $('.coats-img-2');
    coatsTitlePos = _coatsTitle.offset().top;
    coatsParagraphPos = _coatsParagraph.offset().top;
    coatsImgTwoPos = _coatsImgTwo.offset().top;

    _playlistTitle = $('.playlist-title');
    _instaTitle = $('.insta-title');
    playlistTitlePos = _playlistTitle.offset().top;
    instaTitlePos = _instaTitle.offset().top;
  });

  $(window).resize(function() {
    _windowHeight = $(window).height();
  });

  $(window).scroll(function() {
    showItemOnScreen(_titlePartOne, titlePartOnePos);
    showItemOnScreen(_titlePartTwo, titlePartTwoPos);
    showItemOnScreen(_titlePartThree, titlePartThreePos);

    showItemOnScreen(_shirtsTitle, shirtsTitlePos);
    showItemOnScreen(_shirtsParagraph, shirtsParagraphPos);
    showItemOnScreen(_shirtsImgTwo, shirtsImgTwoPos);
    showItemOnScreen(_shirtsImgThree, shirtsImgThreePos);

    showItemOnScreen(_shortsTitle, shortsTitlePos);
    showItemOnScreen(_shortsParagraph, shortsParagraphPos);
    showItemOnScreen(_shortsImgOne, shortsImgOnePos);
    showItemOnScreen(_shortsImgTwo, shortsImgTwoPos);

    showItemOnScreen(_shoesTitle, shoesTitlePos);
    showItemOnScreen(_shoesParagraph, shoesParagraphPos);
    showItemOnScreen(_shoesImgTwo, shoesTitlePos);
    showItemOnScreen(_shoesImgThree, shoesTitlePos);

    showItemOnScreen(_babiesTitle, babiesTitlePos);
    showItemOnScreen(_babiesParagraph, babiesParagraphPos);
    showItemOnScreen(_babiesImgOne, babiesImgOnePos);
    showItemOnScreen(_babiesImgTwo, babiesImgOnePos);
    showItemOnScreen(_babiesImgThree, babiesImgThreePos);

    showItemOnScreen(_jacketTitle, jacketTitlePos);
    showItemOnScreen(_jacketParagraph, jacketParagraphPos);
    showItemOnScreen(_jacketImgTwo, jacketImgTwoPos);

    showItemOnScreen(_pantsTitle, pantsTitlePos);
    showItemOnScreen(_pantsParagraph, pantsParagraphPos);
    showItemOnScreen(_pantsImgOne, pantsImgOnePos);
    showItemOnScreen(_pantsImgTwo, pantsImgTwoPos);

    showItemOnScreen(_coatsTitle, coatsTitlePos);
    showItemOnScreen(_coatsParagraph, coatsParagraphPos);
    showItemOnScreen(_coatsImgTwo, coatsImgTwoPos);

    showItemOnScreen(_playlistTitle, playlistTitlePos);
    showItemOnScreen(_instaTitle, instaTitlePos);
  });
}
