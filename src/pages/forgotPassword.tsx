import ForgotPassword from '../../components/forms/forgotPasswordForm'

const ForgotPasswordPage = () => {
    const handleCancel = () => {
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            <ForgotPassword onCancel={handleCancel} />
        </div>
    );
};

export default ForgotPasswordPage;
