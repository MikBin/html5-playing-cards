  const createCardDomElements = (suitName, $) => {
    let suitclass = suitName;
    let suit = `&${suitName};`;

    let cardsTemplates = [`<div class="card-wrapper-normal ${suitclass} the-deuce">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">2</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">2</div>
				</div>
				<div class="left-col">
				</div>
				<div class="middle-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="right-col">
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">2</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-three">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">3</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">3</div>
				</div>
				<div class="left-col">
				</div>
				<div class="middle-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="right-col">
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">3</div>
				</div>

			</div>
		</div>`,
      `	<div class="card-wrapper-normal ${suitclass} the-four">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">4</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">4</div>
				</div>
				<div class="left-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="middle-col"></div>
				<div class="right-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">4</div>
				</div>

			</div>
		</div>`,
      `<div class="card-wrapper-normal ${suitclass} the-five">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">5</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">5</div>
				</div>
				<div class="left-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="middle-col">
					<div class="center-suit"></div>
				</div>
				<div class="right-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">5</div>
				</div>

			</div>
		</div>`,
      `<div class="card-wrapper-normal ${suitclass} the-six">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">6</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">6</div>
				</div>
				<div class="left-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="middle-col"></div>
				<div class="right-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">6</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-seven">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">7</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">7</div>
				</div>
				<div class="left-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="middle-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="right-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">7</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-eight">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">8</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">8</div>
				</div>
				<div class="left-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="middle-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="right-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">8</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-nine">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">9</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">9</div>
				</div>
				<div class="left-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="middle-col">
					<div class="center-suit"></div>
				</div>
				<div class="right-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
					<div class="center-suit up-side-down"></div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">9</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-ten">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">10</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">10</div>
				</div>
				<div class="left-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="middle-col">
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
				</div>
				<div class="right-col">
					<div class="center-suit"></div>
					<div class="center-suit"></div>
					<div class="center-suit up-side-down"></div>
					<div class="center-suit up-side-down"></div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">10</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-jack">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">J</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">

				<div class="central-rank">
					<div class="digit">J</div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">J</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-queen">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">Q</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">

				<div class="central-rank">
					<div class="digit">Q</div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">Q</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-king">
			<div class="backgrd-suit">
				<div></div>
			</div>
			<div class="left-column">
				<div class="left-rank">
					<div class="digit">K</div>
				</div>
				<div class="left-suit">
					<div></div>
				</div>
			</div>
			<div class="center-column">
				<div class="central-rank">
					<div class="digit">K</div>
				</div>

			</div>
			<div class="right-column">
				<div class="right-suit">
					<div></div>
				</div>
				<div class="right-rank">
					<div class="digit">K</div>
				</div>

			</div>
		</div>`, `<div class="card-wrapper-normal ${suitclass} the-ace">
			<div class="backgrd-suit"><div></div></div>
				<div class="left-column">
					<div class="left-rank"><div class="digit">A</div></div>
					<div class="left-suit"><div></div></div>
				</div>
				<div class="center-column">
					<div class="central-rank">
            <div class="center-suit"></div>
          </div>

				</div>
				<div class="right-column">
					<div class="right-suit"><div></div></div>
					<div class="right-rank"><div class="digit">A</div></div>

				</div>
			</div>`
    ];

    return cardsTemplates.map(CT => $(`<div class="full-screen-card">${CT}</div>`));
  };


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
    /*
        $('.${suitclass}').addClass('crd_zoomIn');

        $('.diams').addClass('crd_zoomInDown');
        $('.hearts').addClass('crd_zoomInUp');
        $('.clubs').addClass('crd_zoomInLeft');
    */

    const jokers_and_backface = [
      `
      <div class="full-screen-card">
      <div class="card-wrapper-normal joker one">
    			<div class="backgrd-suit">
    				<div></div>
    			</div>
    			<div class="left-column">
    				<div class="left-rank">
    					<div class="digit">j</div>
    					<div class="digit">o</div>
    					<div class="digit">k</div>
    					<div class="digit">e</div>
    					<div class="digit">r</div>
    				</div>
    				<div class="left-suit">
    					<div></div>
    				</div>
    			</div>
    			<div class="center-column">
    				<div class="central-rank">
    					<div></div>
    				</div>

    			</div>
    			<div class="right-column">
    				<div class="right-suit">
    					<div></div>
    				</div>
    				<div class="right-rank">
    					<div class="digit">j</div>
    					<div class="digit">o</div>
    					<div class="digit">k</div>
    					<div class="digit">e</div>
    					<div class="digit">r</div>
    				</div>

    			</div>
    		</div>
        </div>`,
      `
        <div class="full-screen-card">
        <div class="card-wrapper-normal joker two">
    			<div class="backgrd-suit">
    				<div></div>
    			</div>
    			<div class="left-column">
    				<div class="left-rank">
    					<div class="digit">j</div>
    					<div class="digit">o</div>
    					<div class="digit">k</div>
    					<div class="digit">e</div>
    					<div class="digit">r</div>
    				</div>
    				<div class="left-suit">
    					<div></div>
    				</div>
    			</div>
    			<div class="center-column">
    				<div class="central-rank">
    					<div></div>
    				</div>

    			</div>
    			<div class="right-column">
    				<div class="right-suit">
    					<div></div>
    				</div>
    				<div class="right-rank">
    					<div class="digit">j</div>
    					<div class="digit">o</div>
    					<div class="digit">k</div>
    					<div class="digit">e</div>
    					<div class="digit">r</div>
    				</div>

    			</div>
    		</div>
        </div>`,
      `<div class="full-screen-card">
      <div class="card-wrapper-normal backface">
        <div class="top-half">
          <div>m</div>
        </div>
        <div class="bottom-half">
          <div>m</div>
        </div>

      </div>
        </div>
        `
    ].map(CT => $(CT));
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
      ...jokers_and_backface
    ]


    deck.forEach((card, idx) => {
      setTimeout(() => {
        let name = idx < 52 ? `${faceNames[idx%13]}${suitNames[~~(idx/13)]}` : idx;
        console.log(name);
        createPNG_and_download(card, name);
      }, 1000 * idx + 1000);

    });

  });