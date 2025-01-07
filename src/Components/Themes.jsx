import { useEffect, useState } from "react";




const Themes = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');





 
  const handlethemeChange = (event) => {
    const newTheme = event.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

 
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex w-5 justify-center items-center ">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="toggle "
          checked={theme === 'dark'}
          onChange={handlethemeChange}
        />
       
      </label>
    </div>
  

  );
};




export default Themes;