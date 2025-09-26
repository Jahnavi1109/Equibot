import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import AmmDataCard from "./components/ecommerce/AmmDataCard";
import BitgetAmmDataCard from "./components/ecommerce/BitgetAmmDataCard";
import HyperliquidAmmDataCard from "./components/ecommerce/HyperliquidAmmDataCard";
import TradingBot from "./components/ecommerce/TradingBot";
import Exchange from "./components/ecommerce/Exchange";
import AdminControls from "./components/ecommerce/AdminControls";
import AddCoins from "./components/ecommerce/AddCoins";
import CronSettings from "./components/ecommerce/CronSettings";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/binance-amm-data" element={<AmmDataCard />} />
            <Route path="/bitget-amm-data" element={<BitgetAmmDataCard />} />
            <Route path="/hyperliquid-amm-data" element={<HyperliquidAmmDataCard />} />
            <Route path="/trading-bots" element={<TradingBot />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/admin-controls" element={<AdminControls />} />
            <Route path="/add-coins" element={<AddCoins />} />
            <Route path="/cron-settings" element={<CronSettings />} />
            

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
