export const metadata = {
  title: 'Dashboard | Practice NextJS',
  description: 'Practice NextJS',
}

const layout = ({ children }) => {
  return (
    <div>
      <nav className='flex gap-5 mb-4 mt-4'>
        <a href="">Home</a>
        <a href="">About</a>
      </nav>
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
