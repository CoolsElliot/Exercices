import React from "react"

class Info extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center mt-4">
                <div className="col-lg-6 d-flex justify-content-between" id="infos">
                    <div className="d-flex flex-column justify-content-between my-3">
                        <p className="m-0 ms-3 fs-4 fw-bold text-light text-uppercase">Rock</p>
                        <p className="m-0 ms-3 fs-4 fw-bold text-light text-uppercase">Paper</p>
                        <p className="m-0 ms-3 fs-4 fw-bold text-light text-uppercase">Scissors</p>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center bg-light me-3 my-3 p-6" style={{borderRadius:"20px"}}>
                        <p className="m-0 fs-3 fw-bold text-primary text-uppercase">score</p>
                        <span className="fs-9 fw-bold text-secondary">0</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Info