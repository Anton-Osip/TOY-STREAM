import React from 'react'

export default function Compony({ language, chengLanguage }) {
    return (
        <div className='compony'>
            <div className="compony__slider">
                
                <div className="studio">
                    <div className="container">
                            <div className="row">
                                <div className="col-lg-9 studio__info">
                                    <h1 className="dtudio__title">
                                        {language[chengLanguage].main_page.title}
                                    </h1>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="team">
                    <div className="container">

                    </div>
                </div>

            </div>
        </div>
    )
}
