import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Equibot || Automated Market Making Bot"
        description="Automated Market Making Bot"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
