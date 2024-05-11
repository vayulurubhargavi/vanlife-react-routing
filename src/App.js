
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans.jsx';
import VanDetails from './pages/Vans/VanDetails.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/hosts/Dashboard.jsx';
import Income from './pages/hosts/Income.jsx';
import Review from './pages/hosts/Review.jsx';
import Host from './components/Host.jsx';
import HostVans from './pages/hosts/Vans.jsx';
import HostVanDetail from './pages/hosts/VanDetail.jsx';
import HostVanPhotos from './pages/hosts/HostVanPhotos.jsx';
import HostVanPricing from './pages/hosts/HostVanPricing.jsx';
import HostVanDetailInformation from './pages/hosts/HostVanDetailInformation.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetails />} />
              {/* NESTED ROUTING */}
              <Route path='/host' element={<Host />}>
                <Route index element={<Dashboard />} /> 
                  {/* the index prop renders the component based on the  layout route */}
                  {/* relative paths and index routing */}
                  <Route path='income' element={<Income />} />
                  <Route path='review' element={<Review />} />
                  <Route path='vans' element={<HostVans />} />
                  <Route path="vans/:id" element={<HostVanDetail />}>
                      <Route index element={<HostVanDetailInformation />}/>
                      <Route path="photos" element={<HostVanPhotos/>}/>
                      <Route path="pricing" element={<HostVanPricing/>}/>             
                  </Route>
              </Route>
            </Route>
          
       </Routes>
      
      </BrowserRouter>
       
    </div>
  );
}

export default App;
