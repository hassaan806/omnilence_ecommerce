'use client';

import smallImg from '@/assets/images/small/img-10.jpg';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const lockScreenSchema = yup.object({
  password: yup.string().required('Please enter your password')
});
const LockScreen = () => {
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(lockScreenSchema)
  });
  return <div className="d-flex flex-column vh-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <Row className="h-100">
          <Col xxl={7}>
            <Row className="justify-content-center h-100">
              <Col lg={6} className="py-lg-5">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="auth-logo mb-4">
                    <Link href="/dashboard" className="logo-dark">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Image src="/logo.png" width={28} height={24} alt="Omnilence logo dark" />
                        <span style={{ fontSize: '18px', fontWeight: '600', color: '#343A40' }}>Omnilence</span>
                      </div>
                    </Link>
                    <Link href="/dashboard" className="logo-light">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Image src="/logo.png" width={28} height={24} alt="Omnilence logo light" />
                        <span style={{ fontSize: '18px', fontWeight: '600', color: '#F8F9FA' }}>Omnilence</span>
                      </div>
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center mb-3">
                    <Image src="/hassaan.png" width={100} height={100} className="rounded-circle" alt="Hassaan Rasheed" />
                  </div>
                  <h2 className="fw-bold fs-24">Hi ! Hassaan</h2>
                  <p className="text-muted mt-1 mb-4">Enter your password to access the admin.</p>
                  <div className="mb-5">
                    <form className="authentication-form" onSubmit={handleSubmit(() => {})}>
                      <PasswordFormInput control={control} name="password" containerClassName="mb-3" placeholder="Enter your password" id="password-id" />
                      <div className="mb-1 text-center d-grid">
                        <Button variant="primary" type="submit">
                          Sign In
                        </Button>
                      </div>
                    </form>
                  </div>
                  <p className="text-danger text-center">
                    Not you? return
                    <Link href="/auth/sign-up" className="text-dark fw-bold ms-1">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xxl={5} className="d-none d-xxl-flex">
            <Card className="h-100 mb-0 overflow-hidden">
              <div className="d-flex flex-column h-100">
                <Image src={smallImg} alt="small-img" className="w-100 h-100" />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>;
};
export default LockScreen;