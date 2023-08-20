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
      <footer className='mt-5'>
        This is footer
      </footer>
    </div>
  );
};

export default layout;
