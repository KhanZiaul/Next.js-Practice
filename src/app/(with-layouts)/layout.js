import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: 'Dashboard | Practice NextJS',
  description: 'Practice NextJS',
}

const layout = ({ children }) => {
  return (
    <div>
      <Navigation></Navigation>
      {
        children
      }
      <Footer></Footer>
    </div>
  );
};

export default layout;
