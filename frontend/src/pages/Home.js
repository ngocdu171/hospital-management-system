import React from 'react'

function Home() {
    return (
        <div>
            <section>
            <div className="container  !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <div className="col-2 ">
                        b5-col 1
                    </div>
                    <div className="col-10 ">
                        <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/931B/production/_111195673_corona_whatyouneedtodo_without_title-nc.png" />
                    </div>
                </div>
            </div>
            </section>

            <section>
            <div className="container  !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <div className="col-6 ">
                        b5-col 1
                    </div>
                    <div className="col-6 ">
                        <img src="https://caodangyduocpasteurtphcm.edu.vn/wp-content/uploads/2016/12/dieu-duong-1.jpg" />
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Home
