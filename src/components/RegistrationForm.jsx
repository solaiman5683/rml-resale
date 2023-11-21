export const RegistrationForm = ({
  userName,
  mobileNumber,
  handleUserNameChange,
  handleRegSubmit,
}) => {
  return (
    <form
      action=""
      method="post"
      onSubmit={handleRegSubmit}
      autoComplete="off"
      className="mt-2"
    >
      <div className="form-group">
        <div className="input-group mb-3">
          <span className="input-group-text bg-white" id="basic-addon1">
            <i class="fa-solid fa-circle-user"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Your Full Name"
            aria-label="name"
            aria-describedby="basic-addon1"
            onChange={handleUserNameChange}
            // style={{ borderColor: getBorderColor() }}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text bg-white" id="basic-addon1">
            <i class="fa-solid fa-eye-slash"></i>
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Your Password"
            aria-label="password"
            aria-describedby="basic-addon1"
            // value={mobileNumber}
            // onChange={handleMobileNumberChange}
            // style={{ borderColor: getBorderColor() }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <button
          type="submit"
          // disabled={!isMobileNumberValid()}
          className="theme-btn"
          // style={{
          //   backgroundColor: !isMobileNumberValid()
          //     ? "darkslategrey"
          //     : "#EF1D26",
          // }}
        >
          Send OTP <i className="fa-solid fa-comment-sms fa-beat"></i>
        </button>
      </div>
    </form>
  );
};
