import HeaderMain from '../../components/header/headerMain';
import Dashboard from '../../components/dashboard'
const IndexPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <HeaderMain />
            <Dashboard />
        </div>
    );
};

export default IndexPage;
