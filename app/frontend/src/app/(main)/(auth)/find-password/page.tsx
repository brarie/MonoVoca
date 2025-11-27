'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function FindPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState('');

  const handleSendVerification = () => {
    if (email) {
      // TODO: Implement actual email verification API
      setEmailSent(true);
      console.log('Verification code sent to:', email);
    }
  };

  const handleVerifyCode = () => {
    // TODO: Implement actual verification check
    setVerified(true);
    console.log('Code verified');
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Card className="w-[min(var(--container-md),85vw)] bg-black/90 backdrop-blur-sm glow-border">
          {/* Logo inside Card */}
          <CardHeader>
            <div className="pt-8 pb-4 flex justify-center">
              <Link href="/" className="group">
                <h1
                  className="text-[min(var(--text-5xl),12vw)] font-black italic text-white group-hover:text-white/80 transition-colors"
                  style={{ fontFamily: 'var(--font-exo-2)' }}
                >
                  MonoVoca
                </h1>
              </Link>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {!verified ? (
              <>
                {/* Username Field */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-gray-200">
                    아이디
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20"
                  />
                </div>

                {/* Email Field with Verification Button */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200">
                    이메일
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="이메일을 입력하세요"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleSendVerification}
                      disabled={emailSent}
                      className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white whitespace-nowrap disabled:opacity-50"
                    >
                      {emailSent ? '발송됨' : '인증 발송'}
                    </Button>
                  </div>
                </div>

                {/* Verification Code Field (appears after email is sent) */}
                {emailSent && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="verificationCode" className="text-gray-200">
                      인증 코드
                    </Label>
                    <Input
                      id="verificationCode"
                      type="text"
                      placeholder="인증 코드를 입력하세요"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20"
                    />
                  </motion.div>
                )}

                {/* Verify Button */}
                {emailSent && (
                  <Button
                    onClick={handleVerifyCode}
                    className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
                    size="lg"
                  >
                    인증 확인
                  </Button>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* New Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-gray-200">
                    새 비밀번호
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="새 비밀번호를 입력하세요"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20"
                  />
                </div>

                {/* New Password Confirm Field */}
                <div className="space-y-2">
                  <Label htmlFor="newPasswordConfirm" className="text-gray-200">
                    새 비밀번호 확인
                  </Label>
                  <Input
                    id="newPasswordConfirm"
                    type="password"
                    placeholder="새 비밀번호를 다시 입력하세요"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20"
                  />
                </div>

                {/* Reset Password Button */}
                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
                  size="lg"
                >
                  비밀번호 재설정
                </Button>
              </motion.div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-8">
            <div className="flex items-center justify-center text-sm">
              <Link
                href="/login"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                ← 로그인으로 돌아가기
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  );
}
