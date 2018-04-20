package com.populisrh.populis_okta_signin_I;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;

import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.json.simple.JSONObject;


@Singleton
//@Lock(LockType.READ)
@Path("/authorize")

public class Rest_Authorize {
	@Path("/userinfo/get")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String UserInfoGet(
			@QueryParam("access-token") String accessToken,
			@QueryParam("dominio") String dominio
			) throws UnsupportedEncodingException, IOException { 

	String result = "";
	try {
		String url = dominio + "oauth2/v1/userinfo";
		String charset = "UTF-8";  // Or in Java 7 and later, use the constant: java.nio.charset.StandardCharsets.UTF_8.name()
		String matricula = "1261";
		String authorization = "Bearer " + accessToken;
		String query = String.format("matricula=%s", 
		     URLEncoder.encode(matricula, charset));
		URLConnection connection = new URL(url + "?" + query).openConnection();
		connection.setRequestProperty("Accept-Charset", charset);
		connection.setRequestProperty("Authorization", authorization);
		BufferedReader in = new BufferedReader(new InputStreamReader(
			connection.getInputStream()));
			String inputLine;
			while ((inputLine = in.readLine()) != null) 
				System.out.println(inputLine);
			in.close();		
		} 
	catch (MalformedURLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	return result;
			
	};

	@Path("/userinfo")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Object> UserInfo(
			@QueryParam("access-token") String accessToken,
			@QueryParam("dominio") String dominio
			) throws UnsupportedEncodingException, IOException { 

	ArrayList<Object> result = new ArrayList<>();
	try {
		String url = dominio + "oauth2/v1/userinfo";
		String charset = "UTF-8";
		String authorization = "Bearer " + accessToken;
		String query = "";
		URLConnection connection = new URL(url).openConnection();
		connection.setDoOutput(true);
		connection.setRequestProperty("Accept-Charset", charset);
		connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=" + charset);
		connection.setRequestProperty("Authorization", authorization);
		try (OutputStream output = connection.getOutputStream()) {
		    output.write(query.getBytes(charset));
		}

		BufferedReader in = new BufferedReader(new InputStreamReader(
				connection.getInputStream()));
				String inputLine;
				while ((inputLine = in.readLine()) != null) 
					result.add(inputLine);
					System.out.println(inputLine);
				in.close();		
	} 
	catch (MalformedURLException e) {
		e.printStackTrace();
	}
	
	return result;
			
	};
	@Path("/teste")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Teste(
			) throws UnsupportedEncodingException, IOException { 

	String result = "";
	try {
		String url = "http://localhost:8083/dadosesocial/rest/funcionario/teste";
		String charset = "UTF-8";  // Or in Java 7 and later, use the constant: java.nio.charset.StandardCharsets.UTF_8.name()
		String matricula = "1261";
		String authorization = "Bearer ";
		String query = String.format("matricula=%s", 
		     URLEncoder.encode(matricula, charset));
		URLConnection connection = new URL(url + "?" + query).openConnection();
		connection.setRequestProperty("Accept-Charset", charset);
		connection.setRequestProperty("Authorization", authorization);
		BufferedReader in = new BufferedReader(new InputStreamReader(
			connection.getInputStream()));
			String inputLine;
			while ((inputLine = in.readLine()) != null) 
				System.out.println(inputLine);
			in.close();		
		} 
	catch (MalformedURLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	return result;
			
	};
}
