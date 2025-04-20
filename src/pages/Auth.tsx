
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useApp } from "@/contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { User, CircleUser, Sparkles } from "lucide-react";

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("login");
  const { toast } = useToast();
  const { setUserType } = useApp();
  const navigate = useNavigate();
  
  // Demo credentials
  const demoEmail = "demo@example.com";
  const demoPassword = "password123";
  
  // State for form fields
  const [email, setEmail] = useState(demoEmail);
  const [password, setPassword] = useState(demoPassword);
  const [name, setName] = useState("");
  const [isProvider, setIsProvider] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false);
      setUserType(isProvider);
      
      toast({
        title: "Login successful!",
        description: `Welcome back! You are logged in as a ${isProvider ? "provider" : "client"}.`,
      });
      
      navigate(isProvider ? "/dashboard" : "/discover");
    }, 1000);
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration delay
    setTimeout(() => {
      setIsLoading(false);
      setUserType(isProvider);
      
      toast({
        title: "Account created!",
        description: `Your ${isProvider ? "provider" : "client"} account has been created successfully.`,
      });
      
      navigate(isProvider ? "/dashboard" : "/discover");
    }, 1000);
  };
  
  return (
    <Layout>
      <div className="max-w-md mx-auto pt-8 pb-16">
        <SectionHeader 
          title="Welcome to Project Donut" 
          description="Sign in to your account or create a new one to get started."
          centered
        />
        
        <Card className="mt-8 border-none bg-glass backdrop-blur-md shadow-glow overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" className="data-[state=active]:bg-primary/20">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-primary/20">
                Sign Up
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="animate-in fade-in-50 duration-300 ease-in-out">
              <form onSubmit={handleLogin}>
                <CardHeader>
                  <CardTitle className="text-2xl">Login</CardTitle>
                  <CardDescription>
                    Enter your email and password to access your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Label className="text-center block mb-2">Account Type</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        type="button"
                        variant={isProvider ? "outline" : "default"}
                        className={`flex gap-2 items-center justify-center ${!isProvider ? "btn-glow" : ""}`}
                        onClick={() => setIsProvider(false)}
                      >
                        <User size={18} />
                        Client
                      </Button>
                      <Button 
                        type="button"
                        variant={isProvider ? "default" : "outline"}
                        className={`flex gap-2 items-center justify-center ${isProvider ? "btn-glow" : ""}`}
                        onClick={() => setIsProvider(true)}
                      >
                        <CircleUser size={18} />
                        Provider
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button 
                    type="submit" 
                    className="w-full btn-glow hover:scale-105 transition-all flex gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} />
                        Login
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Don't have an account?{" "}
                    <button 
                      type="button"
                      className="text-primary hover:underline focus:outline-none"
                      onClick={() => setActiveTab("signup")}
                    >
                      Sign up
                    </button>
                  </p>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="signup" className="animate-in fade-in-50 duration-300 ease-in-out">
              <form onSubmit={handleSignup}>
                <CardHeader>
                  <CardTitle className="text-2xl">Create an Account</CardTitle>
                  <CardDescription>
                    Enter your details to create your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Label className="text-center block mb-2">I want to register as</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        type="button"
                        variant={isProvider ? "outline" : "default"}
                        className={`flex gap-2 items-center justify-center ${!isProvider ? "btn-glow" : ""}`}
                        onClick={() => setIsProvider(false)}
                      >
                        <User size={18} />
                        Client
                      </Button>
                      <Button 
                        type="button"
                        variant={isProvider ? "default" : "outline"}
                        className={`flex gap-2 items-center justify-center ${isProvider ? "btn-glow" : ""}`}
                        onClick={() => setIsProvider(true)}
                      >
                        <CircleUser size={18} />
                        Provider
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button 
                    type="submit" 
                    className="w-full btn-glow hover:scale-105 transition-all flex gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                        Creating account...
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} />
                        Create Account
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Already have an account?{" "}
                    <button 
                      type="button"
                      className="text-primary hover:underline focus:outline-none"
                      onClick={() => setActiveTab("login")}
                    >
                      Login
                    </button>
                  </p>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </Layout>
  );
};

export default Auth;
