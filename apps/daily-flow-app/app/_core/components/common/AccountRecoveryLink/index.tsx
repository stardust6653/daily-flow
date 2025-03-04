import Link from "next/link";
import { AccountRecoveryLinkStyle } from "./AccountRecoveryLink.css";

interface AccountRecoveryLinkProps {
  children: React.ReactNode;
  href: string;
  margin?: string;
}

const AccountRecoveryLink = ({
  children,
  href,
  margin,
}: AccountRecoveryLinkProps) => {
  return (
    <Link href={href} className="account-recovery-link" style={{ margin }}>
      <span className={AccountRecoveryLinkStyle}>{children}</span>
    </Link>
  );
};

export default AccountRecoveryLink;
