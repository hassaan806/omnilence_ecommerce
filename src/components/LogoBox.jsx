import Image from 'next/image';
import Link from 'next/link';
const LogoBox = () => {
  return <div className="logo-box">
      <Link href="/" className="logo-dark">
        <Image src="/logo.png" width={28} height={26} className="logo-sm" alt="Omnilence logo sm" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" height={26} width={28} className="logo-lg" alt="Omnilence logo dark" />
          <span className="logo-text" style={{ fontSize: '20px', fontWeight: '600', color: '#343A40', marginLeft: '8px' }}>Omnilence</span>
        </div>
      </Link>
      <Link href="/" className="logo-light">
        <Image src="/logo.png" width={28} height={26} className="logo-sm" alt="Omnilence logo sm" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" height={26} width={28} className="logo-lg" alt="Omnilence logo light" />
          <span className="logo-text" style={{ fontSize: '20px', fontWeight: '600', color: '#F8F9FA', marginLeft: '8px' }}>Omnilence</span>
        </div>
      </Link>
    </div>;
};
export default LogoBox;