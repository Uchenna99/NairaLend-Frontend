
const TakeLoan = () => {
  return (
    <>
        <div className="get-loan-section">
            <div className="form-progress-section">
                <div className="form-progress">
                    <div className="progress-number"><p>1</p></div>
                    <p>Choose loan option</p>
                </div>

                <div className="form-progress">
                    <div className="progress-number"><p>2</p></div>
                    <p>Select bank account</p>
                </div>

                <div className="form-progress">
                    <div className="progress-number"><p>3</p></div>
                    <p>Select payment card</p>
                </div>

                <div className="form-progress">
                    <div className="progress-number"><p>4</p></div>
                    <p>Confirmation</p>
                </div>
            </div>

            <div className="loan-mid-section">
                <div className="loan-duration">
                    <h4>Select Loan Duration</h4>
                    <div className="select-duration-wrapper">
                        <div className="select-duration"><p>2 weeks</p></div>

                        <div className="select-duration"><p>1 month</p></div>

                        <div className="select-duration"><p>3 months</p></div>

                        <div className="select-duration"><p>6 months</p></div>

                        <div className="select-duration"><p>12 months</p></div>
                        
                        <div className="select-duration"><p>18 months</p></div>

                        <div className="select-duration"><p>24 months</p></div>
                    </div>
                </div>

                <div className="loan-amount"></div>

                <div className="payback-amount"></div>
            </div>

            <div className="dash-bottom-section">
                <button id="dash-bottom-butn">Next Step</button>
            </div>
        </div>
    </>
  )
}

export default TakeLoan;