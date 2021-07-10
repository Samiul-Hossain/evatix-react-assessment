import React, { useState, useEffect } from 'react'

const ChangingEffects = () => {
  const [fontColor, setFontColor] = useState('black')
  const [bg, setBg] = useState('pale')
  const [fontFam, setFontFam] = useState('Arial, sans-serif !important')

  const reset = () => {
    setBg('pale')
    setFontFam('Arial, sans-serif !important')
    setFontColor('black')
    window.location.reload()
  }

  return (
    <body class='u-body'>
      <section class='u-clearfix u-section-1' id='sec-c54c'>
        <div class='u-clearfix u-sheet u-sheet-1'>
          <div class='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
            <div class='u-layout'>
              <div class='u-layout-col'>
                <div class='u-size-30'>
                  <div class='u-layout-row'>
                    <div
                      class='
                      u-align-center
                      u-container-style
                      u-custom-color-11
                      u-layout-cell
                      u-size-60
                      u-layout-cell-1
                    '
                    >
                      <div
                        class='
                        u-container-layout u-valign-middle u-container-layout-1
                      '
                        style={{
                          color: fontColor,
                          backgroundColor: bg,
                          fontFamily: fontFam,
                        }}
                      >
                        <h2
                          class='
                          u-text
                          u-text-default
                          u-text-1
                        '
                          style={{
                            color: fontColor,
                            fontFamily: fontFam,
                          }}
                        >
                          Change text and generate Code!
                        </h2>
                        <p
                          class='
                          u-text
                          u-text-2
                        '
                          style={{
                            color: fontColor,
                            fontFamily: fontFam,
                          }}
                        >
                          By pressing the buttons below, one can change the text
                          box color, font family and font color all together or
                          one by one. For example, when someone clicks
                          cyan&nbsp; button, text color of this box and the
                          heading should change to cyan from black. In the box
                          below with a heading 'Code' should print the html/ css
                          styling for the current text and text box styling. It
                          should change,&nbsp; when any of the following buttons
                          are clicked, accordingly so that when someone copies
                          the code it&nbsp; reproduces a similar text box like
                          this one.&nbsp; Reset button&nbsp; should remove all
                          effects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='u-size-30'>
                  <div class='u-layout-row'>
                    <div
                      class='
                      u-container-style u-layout-cell u-size-33 u-layout-cell-2
                    '
                    >
                      <div class='u-container-layout u-container-layout-2'>
                        <h6 class='u-text u-text-default u-text-3'>
                          Background color:
                        </h6>
                        <a
                          href='#'
                          class='
                          u-btn
                          u-btn-round
                          u-button-style
                          u-custom-color-9
                          u-hover-palette-1-light-1
                          u-radius-50
                          u-btn-1
                        '
                          onClick={() => setBg('blue')}
                        >
                          blue
                        </a>
                        <a
                          href='#'
                          class='
                          u-btn
                          u-btn-round
                          u-button-style
                          u-custom-color-8
                          u-hover-palette-1-light-1
                          u-radius-50
                          u-btn-2
                        '
                          onClick={() => setBg('green')}
                        >
                          green
                        </a>
                        <a
                          href='#'
                          class='
                          u-btn
                          u-btn-round
                          u-button-style
                          u-custom-color-7
                          u-hover-palette-1-light-1
                          u-radius-50
                          u-btn-3
                        '
                          onClick={() => setBg('red')}
                        >
                          Red
                        </a>
                        <h6 class='u-text u-text-default u-text-4'>
                          Font Family:
                        </h6>
                        <a
                          href='#'
                          class='
                          u-black
                          u-btn
                          u-btn-round
                          u-button-style
                          u-custom-font
                          u-font-ubuntu
                          u-hover-palette-1-light-1
                          u-radius-50
                          u-btn-4
                        '
                          onClick={() => setFontFam('Ubuntu, sans-serif')}
                        >
                          ubuntu
                        </a>
                        <a
                          href='#'
                          class='
                          u-black
                          u-btn
                          u-btn-round
                          u-button-style
                          u-custom-font
                          u-heading-font
                          u-hover-palette-1-light-1
                          u-radius-50
                          u-btn-5
                        '
                          onClick={() => setFontFam('Roboto, sans-serif')}
                        >
                          roboto
                        </a>
                        <a
                          href='#'
                          class='
                          u-black
                          u-btn
                          u-btn-round
                          u-button-style
                          u-custom-font
                          u-font-courier-new
                          u-hover-palette-1-light-1
                          u-radius-50
                          u-btn-6
                        '
                          onClick={() => setFontFam('Courier New, sans-serif')}
                        >
                          courier new
                        </a>
                        <h6 class='u-text u-text-default u-text-5'>
                          Font Color:
                        </h6>
                        <a
                          href='#'
                          class='
                          u-border-3
                          u-border-palette-4-dark-1
                          u-btn
                          u-btn-round
                          u-button-style
                          u-none
                          u-radius-50
                          u-text-black
                          u-btn-7
                        '
                          onClick={() => setFontColor('cyan')}
                        >
                          cyan
                        </a>
                        <a
                          href='#'
                          class='
                          u-border-3
                          u-border-custom-color-10
                          u-btn
                          u-btn-round
                          u-button-style
                          u-none
                          u-radius-50
                          u-text-black
                          u-btn-8
                        '
                          onClick={() => setFontColor('purple')}
                        >
                          purple
                        </a>
                        <a
                          href='#'
                          class='
                          u-border-3
                          u-border-black
                          u-btn
                          u-btn-round
                          u-button-style
                          u-none
                          u-radius-50
                          u-btn-9
                        '
                          onClick={() => setFontColor('black')}
                        >
                          black
                        </a>
                        <a
                          class='
                          u-btn
                          u-btn-round
                          u-button-style
                          u-hover-palette-2-dark-1
                          u-palette-3-light-2
                          u-radius-6
                          u-btn-10
                        '
                          onClick={reset}
                        >
                          RESET
                        </a>
                      </div>
                    </div>
                    <div
                      class='
                      u-container-style u-layout-cell u-size-27 u-layout-cell-3
                    '
                    >
                      <div class='u-container-layout u-container-layout-3'>
                        <h6 class='u-text u-text-default u-text-6'>Code:</h6>
                        <div
                          class='
                          u-border-1
                          u-border-palette-5-dark-1
                          u-shape
                          u-shape-rectangle
                          u-shape-1
                        '
                        ></div>
                        <p
                          class='
                          u-custom-font
                          u-font-georgia
                          u-text
                          u-text-default
                          u-text-palette-5-dark-3
                          u-text-7
                        '
                        >
                          color: {fontColor} <br />
                          background-color: {bg} <br />
                          font-family: {fontFam}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  )
}

export default ChangingEffects
