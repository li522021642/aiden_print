// 全局共享数据示例
import { useState } from 'react';

const useUser = () => {
  const [openTip, setOpenTip] = useState(true);
  return {
    openTip,
    setOpenTip,
  };
};

export default useUser;
