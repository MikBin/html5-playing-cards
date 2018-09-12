
  const faceNames = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'T',
    'J',
    'Q',
    'K',
    'A'
  ];
  const suitNames = ['s', 'd', 'h', 'c'];

  $(document).ready(function() {



    const createPNG_and_download = ($htmlDomElSrc, name) => {
      let $body = $("body");
      $body.append($htmlDomElSrc);
      html2canvas($htmlDomElSrc[0], {
        backgroundColor: null
      }).then(function(canvas) {

        let imgdata = canvas.toDataURL('image/png');
        let newdata = imgdata.replace(/^data:image\/png/, 'data:application/octet-stream');
        let $a = $(`<a id="${name}"></a>`);
        $a.attr('download', `${name}.png`).attr('href', newdata);
        $a[0].click();
        $htmlDomElSrc.remove();
      });
    };

    let $body = $('body');
    let deck = [...createCardDomElements("spades", $), ...createCardDomElements("diams", $),
      ...createCardDomElements("hearts", $), ...createCardDomElements("clubs", $),
       ...getJokerAndBackFace($)
    ]


    deck.forEach((card, idx) => {
      setTimeout(() => {
        let name = idx < 52 ? `${faceNames[idx%13]}${suitNames[~~(idx/13)]}` : idx;
        console.log(name);
        createPNG_and_download(card, name);
      }, 1000 * idx + 1000);

    });

  });
