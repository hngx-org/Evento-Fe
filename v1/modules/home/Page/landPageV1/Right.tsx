'use client';

import Image from 'next/image';
import top from '../../../../public/versionone.svg';

function Right() {
  return (
    <div className=" flex align-middle justify-center">
      <Image className="rounded-3xl" src={top} alt="img" width={500} height={300} />
    </div>
  );
}
export default Right;
