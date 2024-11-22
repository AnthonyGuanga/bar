import React from 'react';
import '../sass/tarifas.scss';

const Tarifas: React.FC = () => {
    return (
        <div className="tarifas">
            <div className="tarifas__header">
                <h1 className="tarifas__title">NUESTRAS TARIFAS</h1>
                <p className="tarifas__description">
                    Nuestra relación calidad/precio es inmejorable, nadie te ofrece unos servicios tan cuidados a un precio tan competente... salvo nosotros.
                </p>
            </div>
            <div className="tarifas__flex-container">
                {/* Imagen Izquierda */}
                <div className="tarifas__column tarifas__column--left">
                    {/* Puedes insertar una imagen o contenido aquí */}
                </div>

                {/* Tabla de Precios */}
                <div className="tarifas__column tarifas__column--center">
                    <div className="tarifas__table">
                        {/* Columna 1 */}
                        <div className="tarifas__price-column">
                            <div className="tarifas__row">
                                <span className="tarifas__service">Corte de Pelo</span>
                                <span className="tarifas__price">19 €</span>
                            </div>
                            <div className="tarifas__row">
                                <span className="tarifas__service">Corte de Pelo Premium</span>
                                <span className="tarifas__price">24 €</span>
                            </div>
                            <div className="tarifas__row">
                                <span className="tarifas__service">Corte de Pelo Deluxe</span>
                                <span className="tarifas__price">38 €</span>
                            </div>
                        </div>

                        {/* Columna 2 */}
                        <div className="tarifas__price-column">
                            <div className="tarifas__row">
                                <span className="tarifas__service">Desrizante</span>
                                <span className="tarifas__price">30 €</span>
                            </div>
                            <div className="tarifas__row">
                                <span className="tarifas__service">Tratamiento de Color</span>
                                <span className="tarifas__price">17 €</span>
                            </div>
                            <div className="tarifas__row">
                                <span className="tarifas__service">Afeitado</span>
                                <span className="tarifas__price">19 €</span>
                            </div>
                        </div>

                        {/* Columna 3 */}
                        <div className="tarifas__price-column">
                            <div className="tarifas__row">
                                <span className="tarifas__service">Afeitado Premium</span>
                                <span className="tarifas__price">24 €</span>
                            </div>
                            <div className="tarifas__row">
                                <span className="tarifas__service">Afeitado Deluxe</span>
                                <span className="tarifas__price">38 €</span>
                            </div>
                            <div className="tarifas__row">
                                <span className="tarifas__service">Depilación láser</span>
                                <span className="tarifas__price">89 €</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Imagen Derecha */}
                <div className="tarifas__column tarifas__column--right">
                    {/* Puedes insertar una imagen o contenido aquí */}
                </div>
            </div>
        </div>
    );
};

export default Tarifas;
