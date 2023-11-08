import React from 'react';

function FindCar(props) {
    return (
        <div class="find-car">
        <div class="container">
            <div class="find-car-form">
                <h4 class="find-car-title" style={{color: "#EF1D26" }}></h4>
                <form action="listing-grid.html">
                    <div class="row justify-content-end">

                        <div class="col-lg-3">
                            <div class="form-group">
                                <label>Brand Name</label>
                                <select class="select">
                                    <option value="1">All Brand</option>
                                    <option value="2">Eicher</option>
                                    <option value="2">Mahindra</option>
                                    <option value="2">Dongfeng</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="form-group">
                                <label>Model</label>
                                <select class="select">
                                    <option value="1">All Model</option>
                                    <option value="2">Eicher Bus</option>
                                    <option value="2">Eicher Truck</option>
                                    <option value="2">3 Wheeler</option>
                                    <option value="2">Pick Up</option>
                                    <option value="2">Captain</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="form-group">
                                <label>Condition</label>
                                <select class="select">
                                    <option value="1">All Status</option>
                                    <option value="2">New Vehicle</option>
                                    <option value="3">Used Vehicle</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="form-group">
                                <label>Price Range</label>
                                <select class="select">
                                    <option value="1">All Price</option>
                                    <option value="2">TK 1,00,000 - TK 5,00,000</option>
                                    <option value="3">TK 5,00,000 - TK 10,00,000</option>
                                    <option value="4">TK 15,00,000 - TK 20,00,000</option>
                                    <option value="5">TK 20,00,000 - TK 25,00,000</option>
                                    <option value="6">TK 25,00,000 - TK 30,00,000</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-3 mt-3  align-self-end">
                            <button class="theme-btn" type="submit"><span class="far fa-search"></span> Find Your Vehicle</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default FindCar;