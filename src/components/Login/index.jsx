import { useContext, useState } from "react"
import HidePass from "../../assets/hidePassword"
import ShowPass from "../../assets/showPass"
import { Link } from "react-router-dom"
import ThemeBtn from "../ThemeButton"
import { AppContext } from "../Provider"

function Login() {
    const [showPass, setShowPass] = useState(false)
    function handlePass() {
        setShowPass(!showPass)
    }

    const {theme , handleTheme} = useContext(AppContext)
        return (

        <>
        <div className="flex justify-end pt-5 pr-5">
            <ThemeBtn onClick={handleTheme} text={theme}/>
        </div>
        <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px] mx-auto">
            <div className="mb-10">
                <h1 className="mt-8 mb-2 lg:text-3xl">Login your Account</h1>
            </div>
            <div className="flex flex-col gap-5">
                <form id="sign-in-form" className="flex flex-col gap-4">
                    <div>
                        <div name="email" className="relative text-sm flex flex-col gap-2">
                            <div
                                className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                data-formlayout-id="labelContainer"
                            >
                                <label
                                    className="text-sm text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors text-foreground flex gap-2 items-center break-all leading-normal"
                                    htmlFor="email"
                                    data-formlayout-id="formLabel"
                                >
                                    <span>Email</span>
                                </label>
                            </div>
                            <div
                                className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                data-formlayout-id="dataContainer"
                            >
                                <div className="" data-formlayout-id="nonBoxInputContainer">
                                    <input
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        aria-describedby=":r0:-form-item-description"
                                        aria-invalid="false"
                                        className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-sm leading-4 px-3 py-2 h-[34px]"
                                        fdprocessedid="2kzrnq"
                                    />
                                </div>
                                <div className="mt-2" style={{ opacity: 1, transform: "none" }} />
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div>
                            <div name="password" className="relative text-sm flex flex-col gap-2">
                                <div
                                    className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                    data-formlayout-id="labelContainer"
                                >
                                    <label
                                        className="text-sm text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors text-foreground flex gap-2 items-center break-all leading-normal"
                                        htmlFor="password"
                                        data-formlayout-id="formLabel"
                                    >
                                        <span>Password</span>
                                    </label>
                                </div>
                                <div
                                    className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                    data-formlayout-id="dataContainer"
                                >
                                    <div className="" data-formlayout-id="nonBoxInputContainer">
                                        <div
                                            className="relative"
                                            id=":r1:-form-item"
                                            aria-describedby=":r1:-form-item-description"
                                            aria-invalid="false"
                                        >
                                            <input
                                                type={showPass ? "text" : "password"}
                                                id="password"
                                                autoComplete="current-password"
                                                name="password"
                                                placeholder="••••••••"
                                                className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-sm leading-4 px-3 py-2 h-[34px] pr-10"
                                                fdprocessedid="aj4lkj"
                                            />
                                            <button
                                                data-size="tiny"
                                                type="button"
                                                title="Show password"
                                                aria-label="Show password"
                                                className="justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs py-1 h-[26px] absolute right-1 top-1 px-1.5"
                                                fdprocessedid="ghq7ts"
                                                 onClick={handlePass}
                                            >
                                                <div className="[&_svg]:h-[14px] [&_svg]:w-[14px] text-foreground-lighter">
                                                    {showPass ? <HidePass /> : <ShowPass />}
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-2" style={{ opacity: 1, transform: "none" }} />
                                </div>
                            </div>
                        </div>
                        <a
                            className="absolute top-0 right-0 text-sm text-foreground-lighter"
                            data-sentry-element="Link"
                            data-sentry-source-file="SignInForm.tsx"
                            href="/dashboard/forgot-password?returnTo=%2Forg"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <div
                        className="flex items-center relative"
                        data-sentry-component="LastSignInWrapper"
                        data-sentry-source-file="LastSignInWrapper.tsx"
                    >
                        <div className="w-full">
                            <button
                                data-size="large"
                                form="sign-in-form"
                                type="button"
                                data-sentry-element="Button"
                                data-sentry-source-file="SignInForm.tsx"
                                className="relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 w-full flex items-center justify-center text-base px-4 py-2 h-[42px]"
                                fdprocessedid="z4m6j"
                            >
                                {" "}
                                <span className="truncate">Sign In</span>{" "}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="self-center my-8 text-sm">
                <div>
                    <span className="text-foreground-light">Don't have an account?</span>{" "}
                    <Link to="/">
                    <u>
                        Sign Up Now
                    </u>
                    </Link>
                </div>
            </div>
        </div>
        </>

    )
}

export default Login
