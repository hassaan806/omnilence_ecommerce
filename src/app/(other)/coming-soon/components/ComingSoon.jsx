'use client';

import comingSoonImg from '@/assets/images/coming-soon.png';
import smallImg from '@/assets/images/small/img-10.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
import Timer from './Timer';
const ComingSoon = () => {
  return <div className="d-flex flex-column vh-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <Row className="h-100">
          <Col xxl={7}>
            <Row className="align-items-center justify-content-center h-100">
              <Col lg={8}>
                <div className="auth-logo mb-3 text-center">
                  <Link href="/dashboard" className="logo-dark">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <Image src="/logo.png" width={28} height={24} alt="Omnilence logo dark" />
                      <span style={{ fontSize: '18px', fontWeight: '600', color: '#343A40' }}>Omnilence</span>
                    </div>
                  </Link>
                  <Link href="/dashboard" className="logo-light">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <Image src="/logo.png" width={28} height={24} alt="Omnilence logo light" />
                      <span style={{ fontSize: '18px', fontWeight: '600', color: '#F8F9FA' }}>Omnilence</span>
                    </div>
                  </Link>
                </div>
                <div className="mx-auto text-center">
                  <Image src={comingSoonImg} alt="comingSoon" className="h-auto my-3" style={{
                  maxWidth: '80%'
                }} />
                </div>
                <Timer />
                <p className="text-muted text-center mt-1 mb-4">
                  Exciting news is on the horizon! We&apos;re thrilled to announce that something incredible is coming your way very soon. Our team
                  has been hard at work behind the scenes, crafting something special just for you.
                </p>
                <div className="text-center">
                  <Link href="/dashboard" className="btn btn-primary">
                    Back To Home
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xxl={5} className="d-none d-xxl-flex">
            <Card className="h-100 mb-0 overflow-hidden">
              <div className="d-flex flex-column h-100">
                <Image src={smallImg} height={759} width={700} alt="small" className="w-100 h-100" />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>;
};
export default ComingSoon;