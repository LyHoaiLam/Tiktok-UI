import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import './App.css';

function App() {
    return (
        // <Router>
        <div>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    // const Layout = route.layout === null ? Fragment : DefaultLayout;
                    //biến muống dùng nó vs JSX thì phải viết hoa chữ đầu
                    const Page = route.component; //Lần lập nhứ là Home, lần 2 là Folliwng cứ nối tiếp như thế
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    {' '}
                                    <Page />{' '}
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
        // </Router>
    );
}

export default App;
